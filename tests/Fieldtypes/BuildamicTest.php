<?php

namespace Michaelr0\Buildamic\Tests\Fieldtypes;

use Michaelr0\Buildamic\BuildamicRenderer;
use Michaelr0\Buildamic\Fields\Field;
use Michaelr0\Buildamic\Tests\TestCase;
use Statamic\Support\Str;

class BuildamicTest extends TestCase
{
    /** @test */
    public function it_is_a_buildamic_field()
    {
        $values = [];

        $field = (new Field('buildamic-test', [
            'type' => 'buildamic',
        ]))->setValue($values);

        $this->assertEquals($field->type(), 'buildamic');
    }

    /** @test */
    public function it_can_render()
    {
        $fields = [
            [
                'uuid' => 'field-test',
                'type' => 'field',
                'config' => [
                    'statamic_settings' => [
                        'handle' => 'field-test',
                        'field' => [
                            'type' => 'text',
                        ],
                    ],
                    'buildamic_settings' => [
                        'enabled' => true,
                    ],
                ],
                'value' => 'Testing',
            ],
        ];

        $columns = [
            [
                'uuid' => 'column-test',
                'type' => 'column',
                'config' => [
                    'enabled' => true,
                ],
                'value' => $fields,
            ],
        ];

        $rows = [
            [
                'uuid' => 'row-test',
                'type' => 'row',
                'config' => [
                    'enabled' => true,
                ],
                'value' => $columns,
            ],
        ];

        $sections = [
            [
                'uuid' => 'section-test',
                'type' => 'section',
                'config' => [
                    'enabled' => true,
                ],
                'value' => $rows,
            ],
        ];

        $field = (new Field('buildamic-test', [
                'type' => 'buildamic',
                'view_engine' => 'blade',
                'container_id' => '',
                'container_class' => '',
                'fields' => [
                    [
                        'handle' => 'field-test',
                        'field' => [
                            'input_type' => 'text',
                            'antlers' => false,
                            'display' => 'Text',
                            'type' => 'text',
                            'icon' => 'text',
                            'listable' => 'hidden',
                        ],
                    ],
                ],
                'sets' => [],
            ]))
            ->setValue($sections)
            ->augment();

        $this->assertEquals($field->type(), 'buildamic');

        $buildamicRenderer = $field->value()->value();
        $this->assertTrue($buildamicRenderer instanceof BuildamicRenderer);

        $firstRender = $buildamicRenderer->render();

        $this->assertTrue(Str::contains($firstRender, 'class="buildamic-container'));
        $this->assertTrue(Str::contains($firstRender, 'class="buildamic-section'));
        $this->assertTrue(Str::contains($firstRender, 'class="buildamic-row'));
        $this->assertTrue(Str::contains($firstRender, 'class="buildamic-column'));
        $this->assertTrue(Str::contains($firstRender, 'class="buildamic-field'));
        $this->assertTrue(Str::contains($firstRender, 'Testing'));

        $this->assertSame($buildamicRenderer->render(), $firstRender);

        $field = (new Field('buildamic-test', [
                'type' => 'buildamic',
                'view_engine' => 'blade',
                'container_id' => '',
                'container_class' => '',
                'fields' => [
                    [
                        'handle' => 'field-test',
                        'field' => [
                            'input_type' => 'text',
                            'antlers' => false,
                            'display' => 'Text',
                            'type' => 'text',
                            'icon' => 'text',
                            'listable' => 'hidden',
                        ],
                    ],
                ],
                'sets' => [],
            ]))
            ->setValue(array_merge($sections, $sections))
            ->augment();

        $secondRender = $field->value()->value();

        $this->assertNotSame($firstRender, $secondRender);
        $this->assertEquals(Str::substrCount($secondRender, 'Testing'), 2);
    }
}

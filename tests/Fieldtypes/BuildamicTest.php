<?php

namespace HandmadeWeb\Buildamic\Tests\Fieldtypes;

use HandmadeWeb\Buildamic\BuildamicRenderer;
use HandmadeWeb\Buildamic\Fields\Field;
use HandmadeWeb\Buildamic\Tests\TestCase;
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
                            'type' => 'markdown',
                        ],
                    ],
                    'buildamic_settings' => [
                        'enabled' => true,
                    ],
                ],
                'value' => '## Testing',
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
                        'type' => 'markdown',
                    ],
                ],
            ],
            'sets' => [],
        ]))
            ->setValue($sections);

        $this->assertEquals($field->type(), 'buildamic');

        $firstRender = $field->augment()->value()->value();
        $this->assertTrue($firstRender instanceof BuildamicRenderer);

        $firstRender = $firstRender->render();

        $this->assertTrue(Str::contains($firstRender, 'class="buildamic-container'));
        $this->assertTrue(Str::contains($firstRender, 'class="buildamic-section'));
        $this->assertTrue(Str::contains($firstRender, 'class="buildamic-row'));
        $this->assertTrue(Str::contains($firstRender, 'class="buildamic-column'));
        $this->assertTrue(Str::contains($firstRender, 'class="buildamic-field'));
        $this->assertTrue(Str::contains($firstRender, '<h2>Testing</h2>'));

        $secondRender = $field->setValue(array_merge($sections, $sections))->augment()->value()->value()->render();

        $this->assertNotSame($firstRender, $secondRender);
        $this->assertEquals(Str::substrCount($secondRender, '<h2>Testing</h2>'), 2);
    }
}

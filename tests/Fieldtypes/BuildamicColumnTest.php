<?php

namespace Michaelr0\Buildamic\Tests\Fieldtypes;

use Michaelr0\Buildamic\Fields\Field;
use Michaelr0\Buildamic\Tests\TestCase;

class BuildamicColumnTest extends TestCase
{
    /** @test */
    public function it_is_a_buildamic_column()
    {
        $values = [
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
                'value' => 'Testing',
            ],
        ];

        $field = (new Field('column-handle', [
            'type' => 'buildamic-column',
        ]))
        ->setValue($values);

        $this->assertEquals($field->type(), 'buildamic-column');

        $this->assertSame($field->value(), $values);
    }
}

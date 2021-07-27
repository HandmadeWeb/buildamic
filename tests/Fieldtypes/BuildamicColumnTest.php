<?php

namespace HandmadeWeb\Buildamic\Tests\Fieldtypes;

use HandmadeWeb\Buildamic\Fields\Field;
use HandmadeWeb\Buildamic\Tests\TestCase;

class BuildamicColumnTest extends TestCase
{
    /** @test */
    public function it_is_a_buildamic_column()
    {
        $values = [];

        $field = (new Field('column-handle', [
            'type' => 'buildamic-column',
        ]))
        ->setValue($values);

        $this->assertEquals($field->type(), 'buildamic-column');

        $this->assertSame($field->value(), $values);
    }
}

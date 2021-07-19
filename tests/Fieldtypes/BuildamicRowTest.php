<?php

namespace Michaelr0\Buildamic\Tests\Fieldtypes;

use Michaelr0\Buildamic\Fields\Field;
use Michaelr0\Buildamic\Tests\TestCase;

class BuildamicRowTest extends TestCase
{
    /** @test */
    public function it_is_a_buildamic_row()
    {
        $values = [];

        $field = (new Field('row-handle', [
            'type' => 'buildamic-row',
        ]))
        ->setValue($values);

        $this->assertEquals($field->type(), 'buildamic-row');

        $this->assertSame($field->value(), $values);
    }
}

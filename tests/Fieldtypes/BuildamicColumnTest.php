<?php

namespace Michaelr0\Buildamic\Tests\Fieldtypes;

use Michaelr0\Buildamic\Fields\Field;
use Michaelr0\Buildamic\Tests\TestCase;

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

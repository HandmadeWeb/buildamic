<?php

namespace Michaelr0\Buildamic\Tests\Fieldtypes;

use Michaelr0\Buildamic\Fields\Field;
use Michaelr0\Buildamic\Tests\TestCase;

class BuildamicSetTest extends TestCase
{
    /** @test */
    public function it_is_a_buildamic_set()
    {
        $values = [];

        $field = (new Field('set-handle', [
            'type' => 'buildamic-set',
        ]))
        ->setValue($values);

        $this->assertEquals($field->type(), 'buildamic-set');

        $this->assertSame($field->value(), $values);
    }
}

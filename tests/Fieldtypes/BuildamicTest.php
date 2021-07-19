<?php

namespace Michaelr0\Buildamic\Tests\Fieldtypes;

use Michaelr0\Buildamic\Fields\Field;
use Michaelr0\Buildamic\Tests\TestCase;

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
}

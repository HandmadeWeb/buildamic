<?php

namespace Michaelr0\Buildamic\Tests\Fieldtypes;

use Michaelr0\Buildamic\Fields\Field;
use Michaelr0\Buildamic\Tests\TestCase;

class BuildamicSectionTest extends TestCase
{
    /** @test */
    public function it_is_a_buildamic_section()
    {
        $values = [];

        $field = (new Field('section-handle', [
            'type' => 'buildamic-section',
        ]))
        ->setValue($values);

        $this->assertEquals($field->type(), 'buildamic-section');

        $this->assertSame($field->value(), $values);
    }
}

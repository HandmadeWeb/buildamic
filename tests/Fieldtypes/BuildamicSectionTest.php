<?php

namespace HandmadeWeb\Buildamic\Tests\Fieldtypes;

use HandmadeWeb\Buildamic\Fields\Field;
use HandmadeWeb\Buildamic\Tests\TestCase;

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

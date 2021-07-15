<?php

namespace Michaelr0\Buildamic\Tests\Fields;

use Michaelr0\Buildamic\Fields\Field;
use Michaelr0\Buildamic\Tests\TestCase;

class FieldTest extends TestCase
{
    /** @test */
    public function it_is_instanceof_field()
    {
        $field = (new Field('test-handle', ['type' => 'markdown']));

        $this->assertTrue($field instanceof Field);
    }

    /** @test */
    public function it_can_use_buildamic_settings()
    {
        $field = (new Field('test-handle', ['type' => 'markdown']));

        $this->assertIsArray($field->buildamicSettings());
        $this->assertIsArray($field->buildamicSetting(null));
        $this->assertNull($field->buildamicSetting('foo'));

        $field->setBuildamicSettings(['foo' => 'bar']);

        $this->assertEquals(['foo' => 'bar'], $field->buildamicSettings());
        $this->assertEquals(['foo' => 'bar'], $field->buildamicSetting(null));
        $this->assertEquals('bar', $field->buildamicSetting('foo'));

        $field->mergeBuildamicSettings(['bar' => 'foo']);

        $this->assertEquals(['foo' => 'bar', 'bar' => 'foo'], $field->buildamicSettings());
        $this->assertEquals(['foo' => 'bar', 'bar' => 'foo'], $field->buildamicSetting(null));
        $this->assertEquals('bar', $field->buildamicSetting('foo'));
        $this->assertEquals('foo', $field->buildamicSetting('bar'));

        $field->setBuildamicSettings(['foo' => 'bar']);

        $this->assertEquals(['foo' => 'bar'], $field->buildamicSettings());
        $this->assertEquals(['foo' => 'bar'], $field->buildamicSetting(null));
        $this->assertEquals('bar', $field->buildamicSetting('foo'));
    }

    /** @test */
    public function it_can_use_computed_attributes()
    {
        $field = (new Field('test-handle', ['type' => 'markdown']));

        $this->assertIsArray($field->computedAttributes());
        $this->assertIsArray($field->computedAttribute(null));
        $this->assertNull($field->computedAttribute('foo'));

        $field->setComputedAttributes(['foo' => 'bar']);

        $this->assertEquals(['foo' => 'bar'], $field->computedAttributes());
        $this->assertEquals(['foo' => 'bar'], $field->computedAttribute(null));
        $this->assertEquals('bar', $field->computedAttribute('foo'));

        $field->mergeComputedAttributes(['bar' => 'foo']);

        $this->assertEquals(['foo' => 'bar', 'bar' => 'foo'], $field->computedAttributes());
        $this->assertEquals(['foo' => 'bar', 'bar' => 'foo'], $field->computedAttribute(null));
        $this->assertEquals('bar', $field->computedAttribute('foo'));
        $this->assertEquals('foo', $field->computedAttribute('bar'));

        $field->setComputedAttributes(['foo' => 'bar']);

        $this->assertEquals(['foo' => 'bar'], $field->computedAttributes());
        $this->assertEquals(['foo' => 'bar'], $field->computedAttribute(null));
        $this->assertEquals('bar', $field->computedAttribute('foo'));
    }
}

<?php

namespace HandmadeWeb\Buildamic\Tests\Fields;

use HandmadeWeb\Buildamic\Fields\Fields;
use HandmadeWeb\Buildamic\Tests\TestCase;

class FieldsTest extends TestCase
{
    /** @test */
    public function it_can_use_buildamic_settings()
    {
        $fields = (new Fields([]));

        $this->assertIsArray($fields->buildamicSettings());
        $this->assertIsArray($fields->buildamicSetting(null));
        $this->assertNull($fields->buildamicSetting('foo'));

        $fields->setBuildamicSettings(['foo' => 'bar']);

        $this->assertEquals(['foo' => 'bar'], $fields->buildamicSettings());
        $this->assertEquals(['foo' => 'bar'], $fields->buildamicSetting(null));
        $this->assertEquals('bar', $fields->buildamicSetting('foo'));

        $fields->mergeBuildamicSettings(['bar' => 'foo']);

        $this->assertEquals(['foo' => 'bar', 'bar' => 'foo'], $fields->buildamicSettings());
        $this->assertEquals(['foo' => 'bar', 'bar' => 'foo'], $fields->buildamicSetting(null));
        $this->assertEquals('bar', $fields->buildamicSetting('foo'));
        $this->assertEquals('foo', $fields->buildamicSetting('bar'));

        $fields->setBuildamicSettings(['foo' => 'bar']);

        $this->assertEquals(['foo' => 'bar'], $fields->buildamicSettings());
        $this->assertEquals(['foo' => 'bar'], $fields->buildamicSetting(null));
        $this->assertEquals('bar', $fields->buildamicSetting('foo'));
    }

    /** @test */
    public function it_can_use_computed_attributes()
    {
        $fields = (new Fields([]));

        $this->assertIsArray($fields->computedAttributes());
        $this->assertIsArray($fields->computedAttribute(null));
        $this->assertNull($fields->computedAttribute('foo'));

        $fields->setComputedAttributes(['foo' => 'bar']);

        $this->assertEquals(['foo' => 'bar'], $fields->computedAttributes());
        $this->assertEquals(['foo' => 'bar'], $fields->computedAttribute(null));
        $this->assertEquals('bar', $fields->computedAttribute('foo'));

        $fields->mergeComputedAttributes(['bar' => 'foo']);

        $this->assertEquals(['foo' => 'bar', 'bar' => 'foo'], $fields->computedAttributes());
        $this->assertEquals(['foo' => 'bar', 'bar' => 'foo'], $fields->computedAttribute(null));
        $this->assertEquals('bar', $fields->computedAttribute('foo'));
        $this->assertEquals('foo', $fields->computedAttribute('bar'));

        $fields->setComputedAttributes(['foo' => 'bar']);

        $this->assertEquals(['foo' => 'bar'], $fields->computedAttributes());
        $this->assertEquals(['foo' => 'bar'], $fields->computedAttribute(null));
        $this->assertEquals('bar', $fields->computedAttribute('foo'));
    }

    /** @test */
    public function it_augments_once()
    {
        $fields = (new Fields([]));

        $firstAugment = $fields->augment();
        $secondAugment = $firstAugment->augment();

        $this->assertSame($firstAugment, $secondAugment);
        $this->assertNotSame($firstAugment, $secondAugment->shallowAugment());
    }

    /** @test */
    public function it_shallow_augments_once()
    {
        $fields = (new Fields([]));

        $firstAugment = $fields->shallowAugment();
        $secondAugment = $firstAugment->shallowAugment();

        $this->assertSame($firstAugment, $secondAugment);
        $this->assertNotSame($firstAugment, $secondAugment->augment());
    }
}

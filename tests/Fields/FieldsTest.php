<?php

namespace Michaelr0\Buildamic\Tests\Fields;

use Michaelr0\Buildamic\Fields\Fields;
use Michaelr0\Buildamic\Tests\TestCase;

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
}

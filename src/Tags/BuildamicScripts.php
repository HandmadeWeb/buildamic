<?php

namespace HandmadeWeb\Buildamic\Tags;

use Statamic\Tags\Tags;

class BuildamicScripts extends Tags
{
    protected static $handle = 'buildamicScripts';

    /**
     * The {{ BuildamicScripts }} tag.
     *
     * @return string
     */
    public function index()
    {
        return BuildamicHelper()->scripts();
    }
}

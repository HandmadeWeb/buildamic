<?php

namespace HandmadeWeb\Buildamic\Tags;

use Statamic\Tags\Tags;

class BuildamicStyles extends Tags
{
    protected static $handle = 'buildamicStyles';

    /**
     * The {{ BuildamicStyles }} tag.
     *
     * @return string
     */
    public function index()
    {
        return BuildamicHelper()->styles();
    }
}

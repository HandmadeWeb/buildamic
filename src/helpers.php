<?php

use Statamic\Assets\Asset;

if (! function_exists('glide_url')) {
    function glide_url(string | Asset $asset, array $params = [])
    {
        if ($asset instanceof Asset) {
            $asset = $asset->id();
        }

        unset($params['src']);
        unset($params['id']);
        unset($params['path']);

        $params['src'] = $asset;

        return tag('glide', $params);
    }
}

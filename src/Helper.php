<?php

namespace HandmadeWeb\Buildamic;

use HandmadeWeb\Buildamic\Fields\Field;

class Helper
{
    public static function getSetting(Field $field, $key, $fallback = null)
    {
        return $field->buildamicSetting($key, $fallback);

        return $field->buildamicSetting('attributes.id');
    }

    public static function HtmlId(?string $id)
    {
        if ($id) {
            return 'id="'.$id.'"';
        }
    }
}

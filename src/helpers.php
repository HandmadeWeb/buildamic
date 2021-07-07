<?php

function generateClasses($attribute) {
    $arr = [];

    $recursive = function($attribute) use (&$recursive, &$arr) {
        if (!is_array($attribute)) {
            if (!empty($attribute)) {
                return array_push($arr, $attribute);
            }
        }
        foreach($attribute as $sub_att) {
            if (!is_array($sub_att)) {
                array_push($arr, $sub_att);
            } else {
                $recursive($sub_att);
            }
        }

    };

    $recursive($attribute);

    return ' ' . join(' ', $arr);
}

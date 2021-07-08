<?php

/*
Takes all the inline attributes, font-size, margins, everything, then concatinates them into a big
string of tailwind classes.

@param Array
@return String
*/

function generateClasses($inline) {
    $arr = [];

    $recursive = function($inline) use (&$recursive, &$arr) {
        if (!is_array($inline)) {
            if (!empty($inline)) {
                return array_push($arr, $inline);
            }
        }
        foreach($inline as $sub_att) {
            if (!is_array($sub_att)) {
                array_push($arr, $sub_att);
            } else {
                $recursive($sub_att);
            }
        }

    };

    $recursive($inline);

    return ' ' . join(' ', $arr);
}

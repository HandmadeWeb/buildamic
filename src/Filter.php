<?php

namespace HandmadeWeb\Buildamic;

use HandmadeWeb\HookableActionsAndFilters\Filter as BaseFilter;

class Filter extends BaseFilter
{
    /**
     * REQUIRED IN EACH CHILD CLASS
     * Array of defined callback Listeners.
     *
     * @var array
     */
    protected static $listeners = [];

    /**
     * Run the specified listener.
     *
     * @param mixed ...$args
     *
     * @return mixed
     */
    public static function run(string $listener, ...$args)
    {
        // set $field at start, as $arg0 ignore the rest.
        // example: run('test', $arg0)
        $field = $args[0] ?? null;

        foreach (static::$listeners[$listener] ?? [] as $priority) {
            foreach ($priority as $_listener) {
                $field = $_listener['callback']($field);
                // $field = call_user_func_array($_listener['callback'], [$field]);
            }
        }

        // Output $field, which has been filtered by each loop and callback.
        return $field;
    }
}

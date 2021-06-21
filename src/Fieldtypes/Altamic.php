<?php

namespace Michaelr0\Buildamic\Fieldtypes;

use Michaelr0\Buildamic\AltamicRenderer;
use Statamic\Fields\Fields;
use Statamic\Fields\Fieldtype;

class Altamic extends Fieldtype
{
    protected $allowed_fields = [
        'array' => false,
        'assets' => false,
        'button-group' => false,
        'checkboxes' => false,
        'code' => false,
        'collections' => false,
        'color' => false,
        'date' => false,
        'entries' => false,
        'float' => false,
        'form' => false,
        'grid' => false,
        'hidden' => false,
        'html' => false,
        'integer' => false,
        'link' => false,
        'list' => false,
        'markdown' => true,
        'radio' => false,
        'range' => false,
        'replicator' => false,
        'revealer' => false,
        'section' => false,
        'select' => false,
        'sites' => false,
        'slug' => false,
        'structures' => false,
        'table' => false,
        'taggable' => false,
        'taxonomies' => false,
        'template' => false,
        'taxonomy_terms' => false,
        'text' => false,
        'textarea' => false,
        'time' => false,
        'toggle' => false,
        'user_groups' => false,
        'user_roles' => false,
        'users' => false,
        'video' => false,
        'yaml' => false,
    ];

    protected $blocked_fields = [
        'buildamic' => true,
    ];

    protected function configFieldItems(): array
    {
        return [
            'fields' => [
                'display' => __('Fields'),
                'type' => 'fields',
            ],
            // 'sets' => [
            //     'display' => __('Sets'),
            //     'type' => 'sets',
            // ],
        ];
    }

    /**
     * Get Fields from config.
     *
     * @param mixed $data
     * @return Fields
     */
    public function fields()
    {
        $instance = $this;

        $fields = collect($this->config('fields'))->filter(function ($field) use ($instance) {
            if (isset($instance->allowed_fields[$field['field']['type']]) && $instance->allowed_fields[$field['field']['type']] === false) {
                return false;
            } elseif (isset($instance->blocked_fields[$field['field']['type']]) && $instance->blocked_fields[$field['field']['type']] === true) {
                return false;
            }

            return true;
        })->toArray();

        return new Fields($fields, $this->field()->parent(), $this->field());
    }

    public function defaultValue()
    {
        return [
            'config' => [],
            'sections' => [],
            'rows' => [],
            'columns' => [],
            'fields' => [],
        ];
    }

    /**
     * Load data into meta.
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function preload()
    {
        return [
            'fields' => collect($this->fields()->all())->map(function ($field) {
                return [
                    'handle' => $field->handle(),
                    'meta' => $field->meta(),
                    'value' => $field->fieldtype()->preProcess($field->defaultValue()),
                    'config' => $field->config(),
                ];
            })->toArray(),
            'allowed_fields' => $this->allowed_fields,
            'blocked_fields' => $this->blocked_fields,
        ];
    }

    /**
     * Pre-process the data before it gets sent to the publish page.
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function preProcess($data)
    {
        return array_merge_recursive($this->defaultValue(), $data);
    }

    /**
     * Process the data before it gets saved.
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function process($data)
    {
        $instance = $this;

        // Deduplicate Field Config
        $data['fields'] = collect($data['fields'])->map(function ($field) use ($instance) {
            $field['field'] = array_diff($field['config']['field'], collect($instance->config('fields'))->firstWhere('handle', $field['handle'])['field'] ?? []);

            return $field;
        })->toArray();

        return $data;
    }

    public function augment($value)
    {
        return $this->performAugmentation($value, false);
    }

    public function shallowAugment($value)
    {
        return $this->performAugmentation($value, true);
    }

    private function performAugmentation($value, $shallow = false)
    {
        return new AltamicRenderer($this, $value, $shallow);
    }
}

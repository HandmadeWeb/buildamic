import Buildamic from './components/fieldtypes/Buildamic.vue';
import collect from 'collect.js';

collect().macro('recursiveCollect', function () {
    return this.map(function (item) {
        if (typeof item === 'array' || typeof item === 'object' && !item.recursiveCollect) {
            return collect(item).recursiveCollect();
        }

        return item;
    });
});

Statamic.booting(() => {
    Statamic.$components.register('buildamic-fieldtype', Buildamic);
});


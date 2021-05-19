import Buildamic from './components/fieldtypes/Buildamic.vue';

Statamic.booting(() => {
    Statamic.$components.register('buildamic-fieldtype', Buildamic);
});


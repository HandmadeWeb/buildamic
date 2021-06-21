import Vue from 'vue'
import Buildamic from './components/fieldtypes/Buildamic.vue';
import Altamic from './altamic/Altamic.vue';

Statamic.booting(() => {
    Statamic.$components.register('buildamic-fieldtype', Buildamic);
});

Statamic.booting(() => {
    Statamic.$components.register('altamic-fieldtype', Altamic);
});

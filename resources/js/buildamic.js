import Buildamic from './components/fieldtypes/Buildamic.vue';
import VueTabs from './components/tabs/VueTabs.vue'
import VueTab from './components/tabs/VueTab.vue'

Statamic.booting(() => {
    Statamic.$components.register('vue-tabs', VueTabs)
    Statamic.$components.register('vue-tab', VueTab)
    Statamic.$components.register('buildamic-fieldtype', Buildamic);
});


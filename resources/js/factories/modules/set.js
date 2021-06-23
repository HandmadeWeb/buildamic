import { createModule } from './moduleFactory'

const Set = function ({ UUID, ADMIN_LABEL, VALUE, HANDLE, CONFIG = {} }) {
    this.uuid = `${UUID}`
    this.type = 'set'
    this.config = {
        enabled: true,
        statamic_settings: {
            ...CONFIG,
        },
        buildamic_settings: { admin_label: ADMIN_LABEL || HANDLE, handle: HANDLE }

    }
    this.value = []

    if (VALUE.length) {
        let vm = this;
        Object.keys(VALUE).forEach(field => {
            vm.value.push(createModule('Field', { ADMIN_LABEL: VALUE[field].handle, CONFIG: VALUE[field].config, VALUE: VALUE[field].value, HANDLE: VALUE[field].handle, TYPE: VALUE[field].config.type }))
        })
    }
}

export { Set }

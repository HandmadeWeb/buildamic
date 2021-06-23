import { createModule } from './moduleFactory'

const Set = function ({ UUID, ADMIN_LABEL, VALUE, HANDLE, CONFIG = {} }) {
    console.log({ VALUE })
    this.uuid = `${UUID}`
    this.type = 'set'
    this.config = {
        statamic_settings: {
            ...CONFIG,
            handle: HANDLE
        },
        buildamic_settings: {
            enabled: true,
            admin_label: ADMIN_LABEL || HANDLE,
        }

    }
    this.value = (VALUE).reduce((acc, cur) => {
        acc[cur.handle] = cur.value
        return acc
    }, {})

    // if (VALUE.length) {
    //     let vm = this;
    //     Object.keys(VALUE).forEach(field => {
    //         vm.value.push()
    //     })
    // }
}

export { Set }

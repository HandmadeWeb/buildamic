// import { createModule } from './moduleFactory'
import { InlineDefaults } from './moduleDefaults.js'

const Set = function ({ UUID, ADMIN_LABEL, VALUE, HANDLE, CONFIG = {}, META = {} }) {
    this.uuid = `${UUID}`
    this.type = 'set'
    this.computed = {
        config: {
            ...JSON.parse(JSON.stringify(CONFIG))
        },
        meta: {
            ...JSON.parse(JSON.stringify(META))
        }
    }
    this.config = {
        statamic_settings: {
            field: {
                type: CONFIG.type || '',
            },
            handle: HANDLE
        },
        buildamic_settings: {
            enabled: true,
            admin_label: ADMIN_LABEL || HANDLE,
            ...JSON.parse(JSON.stringify(InlineDefaults))
        }

    }
    this.value = (VALUE).reduce((acc, cur) => {
        acc[cur.handle] = cur.value
        return acc
    }, {})
}

export { Set }

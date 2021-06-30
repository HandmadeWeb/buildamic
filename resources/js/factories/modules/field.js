import { InlineDefaults } from './moduleDefaults.js'

const Field = function ({ ADMIN_LABEL, CONFIG = {}, HANDLE, META = {}, VALUE, UUID, }) {
    this.uuid = `${UUID}`
    this.type = 'field'
    this.config = {
        statamic_settings: {
            handle: HANDLE,
            field: { handle: HANDLE, ...CONFIG }
        },
        buildamic_settings: {
            enabled: true,
            admin_label: ADMIN_LABEL || CONFIG.DISPLAY || HANDLE,
            ...InlineDefaults
        }
    }
    // this.meta = META
    this.value = VALUE
}

export { Field }

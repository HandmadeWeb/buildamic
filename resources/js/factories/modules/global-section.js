import { InlineDefaults } from './moduleDefaults.js'

const GlobalSection = function ({ UUID, ADMIN_LABEL, VALUE }) {
    this.uuid = `${UUID}`
    this.type = 'global-section'
    this.useSettings = 'section'
    this.config = {
        enabled: true,
        buildamic_settings: {
            admin_label: ADMIN_LABEL || this.type,
            ...InlineDefaults
        }
    }
    this.value = VALUE
}

export { GlobalSection }

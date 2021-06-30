import { InlineDefaults } from './moduleDefaults.js'

const Column = function ({ UUID, ADMIN_LABEL }) {
    this.uuid = `${UUID}`
    this.type = 'column'
    this.config = {
        enabled: true,
        columnSizes: {
            "xs": 12,
            "sm": '',
            "md": '',
            "lg": '',
            "xl": ''
        },
        buildamic_settings: {
            admin_label: ADMIN_LABEL || this.type,
            ...InlineDefaults
        }
    }
    this.value = []
}

export { Column }

import { InlineDefaults } from './moduleDefaults.js'

const Column = function ({ UUID, ADMIN_LABEL }) {
    this.uuid = `${UUID}`
    this.type = 'column'
    this.config = {
        enabled: true,
        buildamic_settings: {
            admin_label: ADMIN_LABEL || this.type,
            columnSizes: {
                "xs": 12,
                "sm": '',
                "md": '',
                "lg": 12,
                "xl": ''
            },
            ...JSON.parse(JSON.stringify(InlineDefaults))
        }
    }
    this.value = []
}

export { Column }

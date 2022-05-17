import { InlineDefaults, AttributeDefaults } from './moduleDefaults.js'

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
            inline: { ...JSON.parse(JSON.stringify(InlineDefaults)) },
            attributes: { ...JSON.parse(JSON.stringify(AttributeDefaults)) }
        }
    }
    this.value = []
}

export { Column }

import { InlineDefaults, AttributeDefaults } from './moduleDefaults.js'

const GlobalSection = function ({ UUID, ADMIN_LABEL, VALUE }) {
    this.uuid = `${UUID}`
    this.type = 'global-section'
    this.useSettings = 'section'
    this.config = {
        enabled: true,
        buildamic_settings: {
            admin_label: ADMIN_LABEL || this.type,
            inline: { ...JSON.parse(JSON.stringify(InlineDefaults)) },
            attributes: { ...JSON.parse(JSON.stringify(AttributeDefaults)) }
        }
    }
    this.value = VALUE
}

export { GlobalSection }

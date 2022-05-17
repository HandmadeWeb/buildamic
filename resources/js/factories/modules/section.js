import { InlineDefaults, AttributeDefaults } from './moduleDefaults.js'
import { createModule } from "./moduleFactory";

const Section = function ({ UUID, ADMIN_LABEL }) {

    // Wea
    const row = createModule('Row');

    this.uuid = `${UUID}`
    this.type = 'section'
    this.config = {
        enabled: true,
        buildamic_settings: {
            admin_label: ADMIN_LABEL || this.type,
            inline: { ...JSON.parse(JSON.stringify(InlineDefaults)) },
            boxed_layout: true,
            attributes: { ...JSON.parse(JSON.stringify(AttributeDefaults)) }
        }
    }
    this.value = [row]
}

export { Section }

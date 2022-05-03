import { InlineDefaults } from './moduleDefaults.js'
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
            boxed_layout: true,
            ...JSON.parse(JSON.stringify(InlineDefaults))
        }
    }
    this.value = [row]
}

export { Section }

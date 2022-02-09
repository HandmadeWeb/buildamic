import { InlineDefaults } from './moduleDefaults.js'

const Row = function ({ UUID, ADMIN_LABEL }) {
    this.uuid = `${UUID}`
    this.type = 'row'
    this.config = {
        enabled: true,
        buildamic_settings: {
            admin_label: ADMIN_LABEL || this.type,
            column_count_total: 12,
            ...JSON.parse(JSON.stringify(InlineDefaults))
        }
    }
    this.value = []
}

export { Row }

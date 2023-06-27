import { createModule } from "./moduleFactory";

const Row = function ({ UUID, ADMIN_LABEL }) {

    // We are including a column by default
    const column = createModule('Column');

    this.uuid = `${UUID}`
    this.type = 'row'
    this.config = {
        enabled: true,
        buildamic_settings: {
            admin_label: ADMIN_LABEL || this.type,
            column_count_total: 12,
        }
    }
    this.value = [column]
}

export { Row }

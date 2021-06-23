

const Row = function ({ UUID, ADMIN_LABEL }) {
    this.uuid = `${UUID}`
    this.type = 'row'
    this.config = {
        enabled: true,
        statamic_settings: {},
        buildamic_settings: { admin_label: ADMIN_LABEL || this.type },
    }
    this.value = []
}

export { Row }

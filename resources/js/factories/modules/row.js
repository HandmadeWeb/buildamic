

const Row = function ({ UUID, ADMIN_LABEL }) {
    this.uuid = `${UUID}`
    this.type = 'row'
    this.config = {
        enabled: true,
        admin_label: ADMIN_LABEL || this.type
    }
    this.value = []
}

export { Row }

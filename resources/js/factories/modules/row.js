

const Row = function ({ UUID, ADMIN_LABEL }) {
    this.type = 'row'
    this.uuid = `${UUID}`
    this.value = []
    this.config = {
        admin_label: ADMIN_LABEL || this.type
    }
}

export { Row }

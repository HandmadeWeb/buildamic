const Set = function ({ UUID, ADMIN_LABEL, VALUE, CONFIG = {} }) {
    this.type = 'set'
    this.uuid = `${UUID}`
    this.value = VALUE || []
    this.config = {
        ...CONFIG,
        admin_label: ADMIN_LABEL || this.type
    }
}

export { Set }

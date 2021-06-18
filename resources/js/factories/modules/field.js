const Field = function ({ UUID, ADMIN_LABEL, VALUE, CONFIG = {}, META = {} }) {
    this.type = 'field'
    this.uuid = `${UUID}`
    this.value = VALUE || []
    this.meta = META
    this.config = {
        ...CONFIG,
        admin_label: ADMIN_LABEL || this.type
    }
}

export { Field }

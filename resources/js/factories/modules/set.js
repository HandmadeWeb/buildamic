const Set = function ({ UUID, ADMIN_LABEL, VALUE, HANDLE, CONFIG = {} }) {
    this.uuid = `${UUID}`
    this.type = 'set'
    this.config = {
        ...CONFIG,
        handle: HANDLE,
        admin_label: ADMIN_LABEL || HANDLE
    }
    this.value = VALUE || []
}

export { Set }

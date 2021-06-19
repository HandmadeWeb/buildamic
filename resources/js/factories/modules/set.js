const Set = function ({ UUID, ADMIN_LABEL, VALUE, HANDLE, CONFIG = {} }) {
    this.type = 'set'
    this.uuid = `${UUID}`
    this.value = VALUE || []
    this.config = {
        ...CONFIG,
        handle: HANDLE,
        admin_label: ADMIN_LABEL || HANDLE
    }
}

export { Set }

const Field = function ({ ADMIN_LABEL, CONFIG = {}, HANDLE, META = {}, VALUE, UUID, }) {
    this.uuid = `${UUID}`
    this.type = 'field'
    this.config = {
        enabled: true,
        type: CONFIG.type,
        handle: HANDLE,
        admin_label: ADMIN_LABEL || HANDLE
    }
    // this.meta = META
    this.value = VALUE
}

export { Field }

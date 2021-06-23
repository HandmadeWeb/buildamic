const Field = function ({ ADMIN_LABEL, CONFIG = {}, HANDLE, META = {}, VALUE, UUID, }) {
    this.uuid = `${UUID}`
    this.type = 'field'
    this.config = {
        statamic_settings: {
            enabled: true,
            ...CONFIG,
            handle: HANDLE,
        },
        buildamic_settings: {
            admin_label: ADMIN_LABEL || HANDLE,
        }
    }
    // this.meta = META
    this.value = VALUE
}

export { Field }

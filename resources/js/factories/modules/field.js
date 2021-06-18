const Field = function ({ ADMIN_LABEL, CONFIG = {}, HANDLE, META = {}, VALUE, UUID, }) {

    console.log(VALUE)
    this.type = 'field'
    this.uuid = `${UUID}`
    this.value = VALUE
    // this.meta = META
    this.config = {
        type: CONFIG.type,
        handle: HANDLE,
        admin_label: ADMIN_LABEL || this.type
    }
}

export { Field }

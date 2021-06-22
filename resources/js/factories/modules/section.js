const Section = function ({ UUID, ADMIN_LABEL }) {
    this.uuid = `${UUID}`
    this.type = 'section'
    this.config = {
        admin_label: ADMIN_LABEL || this.type
    }
    this.value = []
}

export { Section }

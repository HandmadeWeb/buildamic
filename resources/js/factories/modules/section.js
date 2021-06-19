const Section = function ({ UUID, ADMIN_LABEL }) {
    this.type = 'section'
    this.uuid = `${UUID}`
    this.value = []
    this.config = {
        admin_label: ADMIN_LABEL || this.type
    }
}

export { Section }

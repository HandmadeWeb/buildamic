const Section = function ({ UUID, ADMIN_LABEL }) {
    this.uuid = `${UUID}`
    this.type = 'section'
    this.config = {
        enabled: true,
        buildamic_settings: {
            admin_label: ADMIN_LABEL || this.type
        }
    }
    this.value = []
}

export { Section }

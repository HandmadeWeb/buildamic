const Column = function ({ UUID, ADMIN_LABEL }) {
    this.uuid = `${UUID}`
    this.type = 'column'
    this.config = {
        enabled: true,
        columnSizes: {
            "xs": 12,
            "sm": '',
            "md": '',
            "lg": '',
            "xl": ''
        },
        admin_label: ADMIN_LABEL || this.type
    }
    this.value = []
}

export { Column }

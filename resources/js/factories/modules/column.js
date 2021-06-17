const Column = function ({ UUID, ADMIN_LABEL }) {
    this.type = 'column'
    this.uuid = `${UUID}`
    this.value = []
    this.config = {
        columnSizes: {
            "xs": 12,
            "sm": '',
            "md": '',
            "lg": '',
            "xl": ''
        },
        admin_label: ADMIN_LABEL || this.type
    }
}

export { Column }

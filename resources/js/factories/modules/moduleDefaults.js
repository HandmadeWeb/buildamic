const responsiveSizes = {
    'xs': '',
    'sm': '',
    'md': '',
    'lg': '',
    'xl': '',
}

export const InlineDefaults = {
    inline: {
        background: {
            gradient: {
                value: ""
            }
        },
        width: {
            ...JSON.parse(JSON.stringify(responsiveSizes))
        },
        'text-align': {
            ...JSON.parse(JSON.stringify(responsiveSizes))
        }
    }
}

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
        display: {
            ...JSON.parse(JSON.stringify(responsiveSizes))
        },
        width: {
            ...JSON.parse(JSON.stringify(responsiveSizes))
        },
        height: {
            ...JSON.parse(JSON.stringify(responsiveSizes))
        },
        'text-align': {
            ...JSON.parse(JSON.stringify(responsiveSizes))
        }
    }
}

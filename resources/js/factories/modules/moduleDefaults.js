const responsiveSizes = {
    'xs': '',
    'sm': '',
    'md': '',
    'lg': '',
    'xl': '',
}

export const InlineDefaults = {
    background: {
        color: '',
        gradient: {
            value: ""
        },
        image: {},
        video: {}
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
    },
    'font-size': {
        ...JSON.parse(JSON.stringify(responsiveSizes))
    },
    items: {
        ...JSON.parse(JSON.stringify(responsiveSizes))
    },
    justifyContent: {
        ...JSON.parse(JSON.stringify(responsiveSizes))
    },
    placeItems: {
        ...JSON.parse(JSON.stringify(responsiveSizes))
    },
    gap: {
        ...JSON.parse(JSON.stringify(responsiveSizes))
    },
    margin: {
        mt: {
            ...JSON.parse(JSON.stringify(responsiveSizes))
        },
        mr: {
            ...JSON.parse(JSON.stringify(responsiveSizes))
        },
        mb: {
            ...JSON.parse(JSON.stringify(responsiveSizes))
        },
        ml: {
            ...JSON.parse(JSON.stringify(responsiveSizes))
        }
    },
    padding: {
        pt: {
            ...JSON.parse(JSON.stringify(responsiveSizes))
        },
        pr: {
            ...JSON.parse(JSON.stringify(responsiveSizes))
        },
        pb: {
            ...JSON.parse(JSON.stringify(responsiveSizes))
        },
        pl: {
            ...JSON.parse(JSON.stringify(responsiveSizes))
        }
    },
    // Add version number to this to check that modules use the latest version
    version: '1.0.0'
}

export const AttributeDefaults = {
    class: '',
    id: '',
    moduleLink: '',
    version: '1.0.0'
}

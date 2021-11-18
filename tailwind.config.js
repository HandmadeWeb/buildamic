module.exports = {
    mode: 'jit',
    purge: {
        content: [
            './resources/**/*.vue',
            './resources/**/*.antlers.html',
            './resources/**/*.blade.php',
            './content/**/*.md'
        ]
    },
    important: true,
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
}

module.exports = {
    important: true,
    content: [
        './resources/js/**/*.vue',
        './resources/views/**/*.antlers.html',
        './resources/views/**/*.antlers.php',
        './resources/views/**/*.blade.php'
    ],
    theme: {
        extend: {
            colors: {
                green: {
                    100: '#E6F4E6',
                    200: '#C8E6C8',
                },
            }
        },
    },
    variants: {},
    plugins: [],
}

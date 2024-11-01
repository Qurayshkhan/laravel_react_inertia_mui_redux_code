/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.js",
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],
    theme: {
        extend: {
            spacing: {
                '5rem': '5rem',
                '10rem': '10rem',
            }
        },
    },
    plugins: [],
}


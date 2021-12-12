module.exports = {
    purge: {
        enabled: true,
        content: [ "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.css",],
    },
    theme: {
        extend: {
            inset: {
                100: "100%",
            },

            padding: {
                120: "120px",
            },

            colors: {
                "theme-color": "#361CC1",
                "theme-color-2": "#FE7A7B",
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        } 
    },
    variants: {},
    plugins: [],
};

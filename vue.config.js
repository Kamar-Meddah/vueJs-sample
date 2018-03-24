module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
            "runtimeCaching": [
                {
                    urlPattern: new RegExp('http://localhost:8000/Api/files/*'),
                    handler: 'cacheFirst',
                },
                {
                    urlPattern: 'http://localhost:8000/Api/posts/all/',
                    handler: 'cacheFirst',
                },
                {
                    urlPattern: new RegExp('http://localhost:8000/Api/posts/last/*'),
                    handler: 'cacheFirst',
                },
                {
                    urlPattern: new RegExp('http://localhost:8000/Api/posts/search/*'),
                    handler: 'cacheFirst',
                },
                {
                    urlPattern: new RegExp('http://localhost:8000/Api/posts/find/*'),
                    handler: 'cacheFirst',
                },
                {
                    urlPattern: new RegExp('http://localhost:8000/Api/posts/lastByCatgory/*/*/*'),
                    handler: 'cacheFirst',
                },
                {
                    urlPattern: new RegExp('http://localhost:8000/Api/categories/all/*'),
                    handler: 'cacheFirst',
                },
                {
                    urlPattern: new RegExp('http://localhost:8000/Api/comments/post/*'),
                    handler: 'cacheFirst',
                },

            ]
        },
    },
};
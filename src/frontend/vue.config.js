const path = require('path')

module.exports = {
    // path 설정
    outputDir: path.resolve(__dirname, "../main/resources/static/vue"),

    // proxy 설정
    devServer: {
        proxy: {
            '/' : {
                target: 'http://localhost:9000',
                ws: true,
                changeOrigin: true
            }
        }
    }
}
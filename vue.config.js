module.exports={
  devServer: {
    proxy: {
      '/api': {
        target: 'http://121.36.19.208:8003/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'view': '@/view',
        'store': '@/store',
      }
    }
  },
  publicPath: './'
}
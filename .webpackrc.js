export default {
  publicPath: '/static/',
  extraBabelPlugins: [
    ...(process.env.COVERAGE ? ['babel-plugin-istanbul'] : [])
  ],
  "proxy": {
    "/api": {
      "target": " http://api.ithome.com",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
};

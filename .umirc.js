export default {
  hashHistory: true,
  outputPath:'./dist/it_home',
  pages:[
    {
      '/index':{context: { title: '首页' }},
      '/details':{context: { title: '详情' }},
    }
  ],
  plugins: [
    'umi-plugin-dva',
    [
      'umi-plugin-routes',
      {
        exclude: [
          /model\.(j|t)sx?$/,
          /service\.(j|t)sx?$/,
          /models\//,
          /components\//,
          /services\//,
        ],
      },
    ],
  ],
};

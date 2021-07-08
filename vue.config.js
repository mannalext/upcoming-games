module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      sass: {
      },
    },
  },
  lintOnSave: false,
  configureWebpack: {
    devtool: 'source-map',
  },
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        options.compilerOptions = {
          ...(options.compilerOptions || {}),
          isCustomElement: (tag) => tag.startsWith('weld-'),
        };
        return options;
      });
  },
};

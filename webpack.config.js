const { resolve } = require('path')
module.exports = {
  // webpack配置
  // 入口起点
  entry: './src/main.ts',
  // 输出
  output: {
    // 输出文件名
    filename: 'built.js',
    // 输出路径
    path: resolve(__dirname, 'build')
  },
  // loader配置
  module: {
    rules: [
      // 详细loader配置
      {
        // 匹配那些文件
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  // plugins配置
  plugins: [
  ],
  devServer: {
    open: true,
    hot: true
  },
  // 模式
  mode: 'development'
}

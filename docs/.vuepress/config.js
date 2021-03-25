const themeConfig = require('./config/themeConfig')
const markdown = require('./config/markdown')
const plugins = require('./config/plugins')
const head = require('./config/head')

module.exports = {
  theme: 'vdoing',
  title: "服务端技术栈",
  description: '服务端技术栈',
  dest: 'webView',
  cache: true,
  base: '/',
  // base: process.env.NODE_ENV === 'development' ? '/' : '/blog/',
  category: true,
  markdown,
  plugins,
  head, 
  themeConfig
}
---
title: webpack4 splitChunks和runtimeChunk用法详解(转)
date: 2018-11-20 21:29:17
tags: webpack
---

阅读webpack文档 <a href="https://webpack.docschina.org/guides/caching/#%E6%8F%90%E5%8F%96%E6%A8%A1%E6%9D%BF-extracting-boilerplate-" target="_blank" >`指南>缓存>提取模板`</a> 时,对官网描述的<a href="https://webpack.docschina.org/configuration/optimization/#optimization-runtimechunk" target="_blank" >`runtimeChunk`</a>属性深感疑惑


遂上网搜索,找到这篇文章

原文链接: <a href="https://blog.csdn.net/yangjidaimin/article/details/83718768" target="_blank" >https://blog.csdn.net/yangjidaimin/article/details/83718768</a>

以下为原文内容

---
# webpack4 splitChunks和runtimeChunk用法详解



## 为什么要用splitChunks
webpack4之前使用<a href="https://webpack.docschina.org/plugins/commons-chunk-plugin/#src/components/Sidebar/Sidebar.jsx" target="_blank" >`CommonsChunkPlugin`</a>提取公共代码，但是<a href="https://webpack.docschina.org/plugins/commons-chunk-plugin/#src/components/Sidebar/Sidebar.jsx" target="_blank" >`CommonsChunkPlugin`</a>存在以下三个问题：
1. 产出的chunk在引入的时候，会包含重复的代码；
2. 无法优化异步chunk；
3. 高优的chunk产出需要的`minchunks`配置比较复杂。
为了解决这些问题，webpack4中用<a href="https://webpack.docschina.org/configuration/optimization/#optimization-splitchunks" target="_blank" >`splitchunks`</a>替代了<a href="https://webpack.docschina.org/plugins/commons-chunk-plugin/#src/components/Sidebar/Sidebar.jsx" target="_blank" >`CommonsChunkPlugin`</a>。

## splitChunks参数详解
<a href="https://webpack.docschina.org/configuration/optimization/#optimization-splitchunks" target="_blank" >`splitchunks`</a>在`production`模式下自动开启。有一些默认配置，通过配置参数详细说明：
```
splitChunks: {
    chunks: "async”,//默认作用于异步chunk，值为all/initial/async/function(chunk),值为function时第一个参数为遍历所有入口chunk时的chunk模块，chunk._modules为gaichunk所有依赖的模块，通过chunk的名字和所有依赖模块的resource可以自由配置,会抽取所有满足条件chunk的公有模块，以及模块的所有依赖模块，包括css
    minSize: 30000,  //默认值是30kb
    minChunks: 1,  //被多少模块共享
    maxAsyncRequests: 5,  //所有异步请求不得超过5个
    maxInitialRequests: 3,  //初始话并行请求不得超过3个
    name: true,  //打包后的名称，默认是chunk的名字通过分隔符（默认是～）分隔开，如vendor~
    cacheGroups: { //设置缓存组用来抽取满足不同规则的chunk,下面以生成common为例
       common: {
         name: 'common',  //抽取的chunk的名字
         chunks(chunk) { //同外层的参数配置，覆盖外层的chunks，以chunk为维度进行抽取
         },
         test(module, chunks) {  //可以为字符串，正则表达式，函数，以module为维度进行抽取，只要是满足条件的module都会被抽取到该common的chunk中，为函数时第一个参数是遍历到的每一个模块，第二个参数是每一个引用到该模块的chunks数组。自己尝试过程中发现不能提取出css，待进一步验证。
         },
        priority: 10,  //优先级，一个chunk很可能满足多个缓存组，会被抽取到优先级高的缓存组中
       minChunks: 2,  //最少被几个chunk引用
       reuseExistingChunk: true，//	如果该chunk中引用了已经被抽取的chunk，直接引用该chunk，不会重复打包代码
       enforce: true  // 如果cacheGroup中没有设置minSize，则据此判断是否使用上层的minSize，true：则使用0，false：使用上层minSize
       }
    }
}
```

## runtimeChunk用法
>它的作用是将包含chunks 映射关系的 list单独从 app.js里提取出来，因为每一个 chunk 的 id 基本都是基于内容 hash 出来的，所以你每次改动都会影响它，如果不将它提取出来的话，等于app.js每次都会改变。缓存就失效了。

## 友情提示：
>可以用–profile --json >stats.json命令行参数来生成记录wepack编译打包过程json文件，把该json文件上传到`http://webpack.github.io/analyse/`可以进行资源包大小和编译构建速度的分析
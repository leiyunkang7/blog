---
title: vue在ie缺少Promise对象
date: 2018-07-08 11:49:31
tags:
---
原文: http://www.cnblogs.com/wujiaolong/p/7372509.html

***

android内嵌H5页面不显示出现这个问题，原因有很多

首先，别急，请看下面的推荐方案：

1、找个Android真机测试下（机型版本为4.4以上），真机联调测试

Android

只需要四个步骤：

1、先保证 是否安装了chrome浏览器

2、其次 ，保证 chrome 是否 已经FQ成功！

3、最后 使用Android 真机连接 电脑

4、最后的最后，打开chrome ,输入：chrome://inspect

即可，另外，chrome只支持 android 4.4以上手机！

IOS

只需要两步骤：

1、打开手机端web检查器，设置 -> Safari -> 高级（最底部） -> Web 检查器 打开

2、确保iOS系统手机接入 MAC 电脑（必须是Mac，window调试不了ios系统）

3、找到Mac电脑的 Safari浏览器，找到开发者，就会显示的手机的设备

4、此时此刻就可以使用了，调试各个App上网页版的页面了。

注：如果是 Hybrid 嵌入式开发，线上版本，可能就不能调试了，因为IOS App 会把线上的调试功能给禁用，安全！

2、如果报 报错 vuex requires a Promise polyfill in this browser.那么，就是兼容性不够好，请看下面的解决方案：

首先,使用 node 安装 *babel-polyfill 命令*

```
npm install --save-dev -polyfill
```

解决方案1：在 webpack.config.js 文件中，entry 入口处修改，加入即可

1
"babel-polyfill":"babel-polyfill",//用来解决的兼容性
例如：

```
entry: {
  "babel-polyfill":"babel-polyfill",//用来解决的兼容性
  app: path.resolve(__dirname, config.entry.module + "/app.js"),
  vendor: config.entry.vendor
},
```
解决方案2：不修改webpack的情况下，在你的主入口文件头部加入，例如：app.js中加入即可

```
import 'babel-polyfill'
```
例如：

```
import 'babel-polyfill';
import Vue from 'vue';

Vue.config.debug = true;
```
解决方案3：也就是使用cdn的资源，以js的文件加入到html页面：例如：

```
<script src="https://cdn.bootcss.com/babel-polyfill/6.23.0/polyfill.min.js"></script>
```
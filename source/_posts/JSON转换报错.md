---
title: JSON转换报错
date: 2018-07-08 11:28:39
tags:
---
今天遇到一个字符串转json报错问题，字符串用工具转换是正常的，但是在代码里用`JSON.parse`转换却报错，然后在这篇[博客](http://www.cnblogs.com/xiaozhuyuan/p/7098235.html)找到原因所在，原来是字符串里面有`/n`换行符导致转换失败的，解决办法就是用`str.replace(/\n/g,"\\\\n")`进行转义。
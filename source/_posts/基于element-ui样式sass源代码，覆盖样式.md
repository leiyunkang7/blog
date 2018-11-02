---
title: 基于element-ui样式sass源代码，覆盖样式
date: 2018-11-02 21:58:45
tags: css
---

1.download`https://github.com/ElementUI/theme-chalk/tree/master/src`至`/src/styles/element-isales`目录下
2.`babel.config.js`配置
```
plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "~./src/styles/element-isales",
        ext: ".scss"
      }
    ]
  ]
```
---
title: nth-child 坑点
date: 2018-07-08 12:00:42
tags: css
---
原文 http://www.cnblogs.com/bestend/p/4459617.html

:nth-child(n) 选择器匹配属于其父元素的第 N 个子元素，**不论元素的类型**。

n 可以是数字、关键词或公式。
 
p:nth-child(2) 可以理解为：如果 p 的父元素的第2个子元素是 p，那么为这个 p 单独设置样式
注意：括号里面是从1开始的

 
使用公式 (an + b)。描述：表示周期的长度，n 是计数器（从 0 开始），b 是偏移值。
 
:nth-child(n+4)选取大于等于4标签，“n”表示从整数，下同。注意：不用对 n 赋值，直接写 n 就可以了。
:nth-child(-n+4)选取小于等于4标签。
:nth-child(2n)选取偶数标签，2n也可以是even。
:nth-child(2n-1)选取奇数标签，2n-1可以是odd。
:nth-child(3n+1)自定义选取标签，3n+1表示“隔二取一”。
:last-child选取最后一个标签。
:nth-last-child(3)选取倒数第几个标签,3表示选取第3个。
---
title: css换行
date: 2018-07-08 11:33:10
tags: css
---
原文: http://www.cnblogs.com/ly312/archive/2011/02/10/1950546.html

在CSS里，主要有强制换行和禁止换行。

一、强制换行

1  word-break: break-all;   只对英文起作用，以字母作为换行依据。
2  word-wrap: break-word;   只对英文起作用，以单词作为换行依据。
3  white-space: pre-wrap;   只对中文起作用，强制换行。

 word-break:break-all 和 word-wrap:break-word 都是能使其容器如DIV的内容自动换行，它们的区别在于：

1、word-break:break-all 

      假设div宽度为450px，它的内容就会到450px自动换行，如果该行末端有个很长的英文单词，它会把单词截断，一部分保持在行尾，另一部分换到下一行。
2、word-wrap:break-word 

      例子与上面一样，但区别就是它会把整个单词看成一个整体，如果该行末端宽度不够显示整个单词，它会自动把整个单词放到下一行，而不会把单词截断掉。


二、禁止换行 

1  white-space:nowrap; overflow:hidden; text-overflow:ellipsis; 

white-space:nowrap; 是禁止换行。

overflow:hidden; 是让多出的内容隐藏起来，否则多出的内容会撑破容器。

text-overflow:ellipsis; 让多出的内容以省略号...来表达。但是这个属性主要用于IE等浏览器，Opera浏览器用-o-text-overflow:ellipsis; 而Firefox浏览器没有这个功能，多出的内容只能隐藏起来。
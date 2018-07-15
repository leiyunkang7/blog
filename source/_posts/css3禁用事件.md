---
title: css3禁用事件
date: 2018-07-08 11:22:44
tags: css
---
#### 透明度

可以通过改变`opacity`的值，实现元素的显示和隐藏与改变（与改变`display`或者`visbility`的值达到类似的效果相似，但性能更好）。比如实现菜单的切换效果：菜单展开时，`opacity`值为1；收起时，`opacity`值为0.要注意的是`pointer-events`的值也要随之改变，防止用户操作到明明收起的菜单。closed类名会根据用户点击‘open’时，closed类名会被加上；点击‘close’按钮时，closed类名会被加上；点击‘close’按钮时，closed类名会被移除。对应代码是这样的：
```
.menu{
opacity:1;
transition:.2s;
}

.menu.closed{
opacity:0;
pointer-events:none;
}
```
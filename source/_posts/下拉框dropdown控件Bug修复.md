---
layout: jalor
title: 下拉框dropdown控件Bug修复
date: 2018-07-08 11:30:12
tags: js
---
联想输入框输入错误关键字后清空输入框，再次点击下拉按钮数据没有刷新。
解决方法：
```
		$('#regionName,#repOfficeName').dropdown(setting).on('change input',function(){
			
			if($(this).val().trim() == ''){
				
				$($(this).data('selector')).data('step',1);
				
			}
			
		});
```
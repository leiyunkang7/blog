---
title: vscode用户设置
date: 2018-07-08 11:55:49
tags: 工具
---
```
{
  "editor.cursorStyle" : "line",
  "files.autoSave" : "afterDelay",
  "editor.tabSize" : 2,
  "workbench.iconTheme" : "vscode-great-icons",
  "vsicons.dontShowNewVersionMessage" : true,
  "extensions.ignoreRecommendations" : true,
  "git.ignoreMissingGitWarning" : true,
  "eslint.autoFixOnSave" : true,
  "eslint.validate" : ["javascript", "javascriptreact", {
  "language" : "html",
  "autoFix" : true
  }, {
  "language" : "vue",
  "autoFix" : true
  }
  ],
  "window.openFilesInNewWindow" : "on",
  "gitlens.advanced.messages" : {
  "suppressCommitHasNoPreviousCommitWarning" : false,
  "suppressCommitNotFoundWarning" : false,
  "suppressFileNotUnderSourceControlWarning" : false,
  "suppressGitVersionWarning" : false,
  "suppressLineUncommittedWarning" : false,
  "suppressNoRepositoryWarning" : false,
  "suppressResultsExplorerNotice" : false,
  "suppressUpdateNotice" : false,
  "suppressWelcomeNotice" : true
  },
  "workbench.colorTheme" : "Solarized Light",
  "editor.renderLineHighlight" : "none"
}
```
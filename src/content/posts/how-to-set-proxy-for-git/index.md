---
title: 为你的git设置代理
published: 2026-02-19T18:00:00+08:00
description: 只是一篇教程
tags: ["git", "proxy"]
category: Guide
draft: false
pinned: false
lang: zh-CN
---

# 教程：为你的git设置代理

在国内网络访问受阻情况下，有时需要git通过代理提交代码。由于git默认不使用系统代理，你需要自行配置。

## 设置代理

在终端输入以下指令以为git设置代理。

http协议配置：
```bash
git config --global http.proxy "http://127.0.0.1:7897"
```

https协议配置：
```bash
git config --global https.proxy "http://127.0.0.1:7897"
```

socks协议配置：
```bash
git config --global http.proxy "socks5://127.0.0.1:7897"
```

```bash
git config --global https.proxy "socks5://127.0.0.1:7897"
```

127.0.0.1是本机ip，端口需要使用你的配置。如Clash verge使用代理端口7897，因此目标地址为：127.0.0.1:7897.

## 查看当前代理

查看当前代理配置很简单，只需要保留前部分内容即可。

在终端输入以下指令以查看当前git的代理配置。

http协议配置：
```bash
git config --global http.proxy
```

https协议配置：
```bash
git config --global https.proxy
```

## 清除代理

有时需要清除代理配置。

输入以下代码以为git清除代理：

http协议配置：
```bash
git config --global --unset http.proxy
```

https协议配置：
```bash
git config --global --unset https.proxy
```
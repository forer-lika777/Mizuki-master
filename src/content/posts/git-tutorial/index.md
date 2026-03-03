---
title: git 教程
published: 2026-03-03T1:30:00+08:00
description: 只是一篇教程
tags: ["git", "remote"]
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

- - -

# 教程：使用 git 远程推送文件

git是一个强大的工具。本篇文章将教你如何使用ssh协议配置传输自己的远程仓库。

## 远程仓库配置钩子

首先要做的是在你的远程仓库中配置 hooks 钩子，用于将仓库传输到网站目录。

打开你的远程终端（或使用SSH登录），输入以下指令，创建一个 git 仓库管理的位置。这个位置可以由你自行配置。请记下这个位置，以便后续使用。示例创建了一个网站的 git 仓库目录。

```bash
mkdir /root/git/website.git/
```

然后，进入你创建的目录。

```bash
cd /root/git/website.git/
```

进行 git 仓库初始化。"--bare"参数表示此仓库是一个裸仓库，只包含 git 版本控制相关的文件，不包含实际编辑的文件副本。

```bash
git init --bare
```

进入 hooks 文件夹。

```bash
cd hooks
```

使用任意文本编辑器打开 post-receive 文件。示例将使用 nano 编辑。

```bash
nano post-receive
```

然后，为 post-receive 文件键入以下内容。"/www/wwwroot/website" 请修改为你要目标推送的位置；"/root/git/website.git" 请修改为你之前配置的 git 仓库位置。

```bash
#!/bin/bash
git --work-tree=/www/wwwroot/website --git-dir=/root/git/website.git checkout -f
```

保存并退出。继续在当前目录下执行以下命令，为 post-receive 添加执行权限。

```bash
chmod +x post-receive
```

至此，远程仓库的配置已经完成，可以退出。

## 本地仓库配置远程连接

现在，回到你的本地电脑进行配置。

确保当前已处在你本地电脑的仓库目录中。（如果还没有创建 git 仓库，请输入 "git init" 进行仓库初始化）

输入以下指令，配置目标远程仓库。"live"可以替换为一个你想要的名称，请记住此名称，便于后续使用；"127.0.0.1"请替换为你的远程方 ip 或域名地址（如果你还没有配置过 SSH 登录连接，请参阅配置 SSH 登录连接）；"/root/git/website.git/" 请替换为你先前在服务器设置的 git 仓库目录。

```bash
git remote add live ssh://root@127.0.0.1/root/git/website.git/
```

以后，就可以进行远程推送了。输入以下指令，进行仓库推送。"live" 是上一步设置的名称；"master" 是推送的分支。

```bash
git push live master
```

如果你要查看本地电脑当前远程连接配置，请输入：

```bash
git remote -v
```

如果你要覆写先前的远程连接地址，请输入：

```bash
git remote set-url live ssh://root@127.0.0.1/path/to/your/repo/
```
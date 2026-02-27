---
title: 关于本网站
published: 2025-12-26
tags: [Develop, Website]
description: 你不应公开分享本网站
category: Develop log
draft: false
pinned: true
lang: zh-CN
---

你不应公开分享本网站，因为我还不想公开~
===

- - -

# 更新日志

## 更新 - 20260227

### 已修改的内容

1.  框架版本更新到了 8.2！
2.  动画变得更舒服了！
3.  修改了字体。字体选择：拉丁字母 来自 Google font - Comfortaa；简体中文 来自 SourceHanSans (思源黑体)。某些文字可能不符合日语或韩语的书写习惯，因为汉字字体版本是CJK。
4.  自定义了滚动条，原来那个会导致页面动画播放两次。其实注释里写了会播放两次所以才不初始化的，只是我一开始没看见。。

## 更新 - 20260106

### 已修改的内容

1.  网站已备案。
2.  现在滚动条样式将随主题切换而改变。原先滚动条样式始终使用主题 os-theme-dark 黑色半透明样式，这在深色模式下非常难看清。
    
    添加/修改的代码如下：
    ```ts
    // 应用主题变化
    if (needsThemeChange) {
        const scrollbar = document.querySelectorAll(".os-scrollbar")[1];
        if (targetIsDark) {
            document.documentElement.classList.add("dark");
            scrollbar?.classList.remove("os-theme-dark");
            scrollbar?.classList.add("os-theme-light");
        } else {
            document.documentElement.classList.remove("dark");
            scrollbar?.classList.remove("os-theme-light");
            scrollbar?.classList.add("os-theme-dark");
        }
    }
    ```
3.  更新此文档。

- - -

## 更新 - 20251226

### 已修改的内容

1.  网站已添加域名绑定与SSL证书。网站域名：www.vista233.top
2.  添加 teapot 页面。
3.  提高搜索框对比度。原始发布中，搜索框颜色与背景相近，难以看清。
    
    添加的代码如下：
    ```css
    input::placeholder {
        color: black;
        opacity: 0.4;
    }
    :root.dark input::placeholder {
        color: white;
        opacity: 0.4;
    }
    ```
    ```svelte
    <div id="search-bar-inside" class="flex relative lg:hidden transition-all items-center h-11 rounded-xl
      bg-black/[0.04] hover:bg-black/[0.06] focus-within:bg-black/[0.06]
      dark:bg-white/5 dark:hover:bg-white/10 dark:focus-within:bg-white/10">
        <Icon icon="material-symbols:search" class="absolute text-[1.25rem] pointer-events-none ml-3 transition my-auto text-black/30 dark:text-white/30"></Icon>
        <input placeholder="Search" bind:value={keywordMobile}
            class="pl-10 absolute inset-0 text-sm bg-transparent outline-0
            focus:w-60 text-black/50 dark:text-white/50">
    </div>
    ```
4.  将返回按钮与主页图标包裹，防止宽度变化时两者间距变化/减小间距。
    
    代码如下：
    ```astro
    <div class="flex items-center">
        <a href="javascript:history.back()" class="btn-plain scale-animation rounded-lg h-[3rem] w-[3rem] active:scale-95">
            ...
        </a>
        <a href={url('/')} class="btn-plain scale-animation rounded-lg h-[3rem] px-4 font-bold active:scale-95">
            ...
        </a>
    </div>
    ```
5.  替换网站URL。
6.  更新此文档。

- - -

## 更新 - 20251218

### 已修改的功能

1.  导航栏已被设置为常驻页面顶部，样式为填充。原始发布中，导航栏为圆角，且页面滑动一定距离会离开。
    
    添加的代码如下：
    ```css
    #top-row {
        position: fixed;
        top: 0;
        width: 100vw;
        z-index: 50;
        pointer-events: none;
        transition: all;
        transition-duration: 700ms;
        max-width: var(--page-width);
    }
    ```
    优点：使用元素的id访问控制元素，在css中控制元素。而非使用原作者逆天的".absolute.w-full.z-30.pointer-events-none"访问元素。
2.  导航栏添加返回上一页功能。添加的代码如下：
    ```svelte
    <a href="javascript:history.back()" class="btn-plain scale-animation rounded-lg h-[3rem] w-[3rem] active:scale-95">
        <div class="flex flex-row items-center">
            <Icon name="material-symbols:arrow-back-rounded" size="24"/>
        </div>
    </a>
    ```
3.  修复移动端banner模式背景图位置错误的问题。
4.  添加osu图标。
5.  更新此文档。

- - -

## 更新 - 20251216

### 已修改的功能

1.  导航栏已被设置为填充整个页面

2.  修复移动端导航栏遮挡了内容的问题
    
    原代码：
    ```css
    body.enable-banner #banner-wrapper:not(.mobile-hide-banner) {
        height: 75vh !important;
        min-height: 500px;
        max-height: none; /* 移除最大高度限制 */
        top: 0 !important;
    }
    ```
    
    修改后：
    ```css
    body.enable-banner #banner-wrapper:not(.mobile-hide-banner) {
        height: 75vh !important;
        min-height: 500px;
        max-height: none; /* 移除最大高度限制 */
        top: 11rem !important;
    }
    ```

3.  将原作者狗屎的访问main content元素的方式变更。原作者为main content的class设置样式："absolute w-full z-30"，其他地方控制此元素时却直接以此样式为选择器访问：
    ```css
    body.no-banner-mode .absolute.w-full.z-30 {
    top: 5.5rem !important;
    }   
    ```
    ```js
    var mainContent = document.querySelector('.absolute.w-full.z-30.pointer-events-none');
    ```
    已在main content的class的开头添加"main-content-layout"，其他地方控制此元素以此作为选择器访问。旨在提升代码质量，降低维护难度。

- - -

## 更新 - 20251212

### 已修改的功能

1.  修复滚动相关的问题。原始发布中，若切换页面前不在页面顶端，会导致非预期的固定滚动与意外的瞬间移动。此更改在页面切换前即自动滚动到页面顶部，避免非预期的滚动。
    添加的代码如下：
    ```mjs
    plugins: {
            doScrollingRightAway: true,
            animateScroll: {
                betweenPages: false,
                samePageWithHash: false,
                samePage: false,
            },
        },
    ```

2.  修复滑动条不显示的问题。原始发布中，滚动条并未以预期的方式渲染。OverlayScrollBars插件成功阻止浏览器原生滚动条渲染，但没有初始化，导致没有滚动条出现。此更改初始化了插件功能，成功渲染滚动条。
    添加的代码如下：
    ```js
    // 请初始化 OverlayScrollBars。原作者没有初始化，导致滚动条并未出现。已改进
    const osInstance = OverlayScrollbars(document.body, {
        scrollbars: {
            autoHide: "leave",
            autoHideDelay: 400
        }
    });
    ```

3.  更改卡片背景样式。全背景图模式下，卡片的透明背景造成浏览器性能显著下降。此更改将卡片透明背景设置为不透明背景，旨在降低性能消耗，提升流畅度。
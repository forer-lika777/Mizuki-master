---
title: 更新 Visual Studio 主题颜色
published: 2026-03-06
description: "升级 VS2022 主题适配VS2026"
tags: ["Visual Studio"]
category: Tutorial
draft: false
---

此文章来源于 [更新 Visual Studio 主题颜色 - Visual Studio (Windows) | Microsoft Learn](https://learn.microsoft.com/zh-cn/visualstudio/extensibility/migration/modernize-theme-colors?view=visualstudio) 并提供了更准确的翻译。

# 更新 Visual Studio 主题颜色

## 概要

Visual Studio 主题以前依赖于精细的特定功能的颜色标记。随着时间的推移，这种方法产生了成百上千个定制值和自定义颜色，使得一致性和可访问性难以保证。为了解决此问题，我们围绕明确的设计原则重新构建了系统：减少颜色标记数量以简化维护，采用可持续和可预测的颜色渐变梯度以增强可访问性，并提供在 Visual Studio、Windows 平台以及其他 Microsoft 工具之间更加有凝聚力的体验。

本文介绍了哪些更改以及如何迁移以前的主题以与 Visual Studio 2026 兼容。

## Visual Studio 2022 以前的颜色主题

在 Visual Studio 2022 之前，现成的 Visual Studio 主题包含大约 34 个类别和 ~1,806 个颜色标记。扩展功能通常会添加更多内容。如此多的颜色标记造成了一些挑战：

1.  许多标记几乎完全相同，仅在色调或亮度上略有差异，导致视觉上的杂乱和困惑。
2.  单个功能（如 CodeAnalysis、Diagnostics、ManifestDesigner 等）创建了自己的唯一标记，导致颜色使用零散且不一致。
3.  主题创作者可能很难确定界面某处颜色对应的标记名称。
4.  由于大量自定义项目，验证无障碍对比度具有挑战性。
5.  整体用户体验变得不一致，界面显示不匹配或不同步。

下面是 Visual Studio 2022 主题中的类别和颜色标记的示例：

```XML
<Theme ...>
...
<Category Name="CodeAnalysis" ...>
   <Color Name="RenameError">...</Color>
   <Color Name="RenameResolvableConflict">...</Color>
</Category>
<Category Name="Diagnostics"...>
...
   <Color Name="AdvancedListItemSelected">
      <Background ... />
      <Foreground ... />
   </Color>
   <Color Name="ButtonBackgroundDisabled">...</Color>
   <Color Name="ButtonBorderDisabled">
      <Background ... />
   </Color>
   <Color Name="ButtonTextDisabled">
      <Background ... />
   </Color>
...
</Category>
...
<!-- 更多局部特定的种类以及数百个颜色标记 -->
</Theme>
```

## Visual Studio 2026 中对此做出的更改

Visual Studio 2026 将标记整合到少数几个意图优先的类别中，并使用可预测的命名层次。现成的 shell 主题现在仅包含四个顶级类别和 229 个颜色标记，大约减少了 87% 的颜色标记。

下面是 Visual Studio 2026 主题中的语义和意图优先标记示例：

```XML
<Theme ...>
<Category Name="Shell">
...
   <Color Name="ControlFillSecondary"> ... </Color>
   <Color Name="TextFillPrimary"> ... </Color>
   <Color Name="SolidBackgroundFillBase"> ... </Color>
...
</Category>
</Theme>
```

## 为什么更少的标记能实现更好的用户体验

*   意向优先命名：语义标记名称清楚地反映其角色（例如 ControlFill、TextFill、AccentFill、Stroke、SystemFill）和层次（主要、次要），使用直观。
*   简化的调色板：更新一小部分共享标记，即可同步更改 shell 和扩展的颜色配置。
*   更高的一致性：减少自定义项目意味着意外的不匹配更少，并消除差别不大的变体。
*   改进了无障碍功能：集中的颜色配置和语义标记（成功、警示、严重、注意）使无障碍对比度验证更加简单和可靠。
*   更好的性能和可维护性：语义标记取代精细颜色标记，减少性能开销并提高 UI 质量。

# 教程：将主题迁移至 Visual Studio 2026

目前市场中现有的颜色主题设计器仅适用于 Visual Studio 2022 及以下版本，且 Visual Studio 2022 主题不能直接应用于 Visual Studio 2026。如果直接安装 Visual Studio 2022 的主题，会导致许多界面颜色显示不正常。

可以通过将其现有标记与新的语义标记合并，使以前的主题与 Visual Studio 2026 兼容。无需重新创建以前的每个标记。Visual Studio 2026 先读取新标记，必要时回退到以前的标记。请进行以下步骤来升级 Visual Studio 2022 版本的颜色主题：

1.  添加 `FallbackId="{Light or Dark theme GUID}"` 对象到 `<Theme />`。GUID请填入下面两条之一：
    
    | 要基于的主题 | FallbackId |
    | --- | --- |
    | Light | {de3dbbcd-f642-433c-8353-8f1df4370aba} |
    | Dark | {1ded0138-47ce-435e-84ef-9ec1f439b749} |

2.  将以下标记追加到旧主题标记之后。请确保按如下所示复制类别名称和 GUID。

    亮色主题的标记集合模板：

    ```XML
    <Theme Name="MyAwesomeLightTheme" ...>
    <!-- 这里存放已经存在的颜色标记 -->
    <Category Name="Shell" GUID="{73708ded-2d56-4aad-b8eb-73b20d3f4bff}">
        <Color Name="AccentFillDefault">
            <Background Type="CT_RAW" Source="FF5649B0" />
        </Color>
        <Color Name="AccentFillSecondary">
            <Background Type="CT_RAW" Source="E55649B0" />
        </Color>
        <Color Name="AccentFillTertiary">
            <Background Type="CT_RAW" Source="CC5649B0" />
        </Color>
        <Color Name="SolidBackgroundFillTertiary">
            <Background Type="CT_RAW" Source="FFF9F9F9" />
        </Color>
        <Color Name="SolidBackgroundFillQuaternary">
            <Background Type="CT_RAW" Source="FFFFFFFF" />
        </Color>
        <Color Name="SurfaceBackgroundFillDefault">
            <Background Type="CT_RAW" Source="FFF9F9F9" />
        </Color>
        <Color Name="TextFillSecondary">
            <Background Type="CT_RAW" Source="9E000000" />
        </Color>
    </Category>
    <Category Name="ShellInternal" GUID="{5af241b7-5627-4d12-bfb1-2b67d11127d7}">
        <Color Name="EnvironmentBackground">
            <Background Type="CT_RAW" Source="FFEEEEEE" />
        </Color>
        <Color Name="EnvironmentBorder">
            <Background Type="CT_RAW" Source="FF5649B0" />
        </Color>
        <Color Name="EnvironmentIndicator">
            <Background Type="CT_RAW" Source="66757575" />
        </Color>
        <Color Name="EnvironmentLogo">
            <Background Type="CT_RAW" Source="FF5649B0" />
        </Color>
        <Color Name="EnvironmentLayeredBackground">
            <Background Type="CT_RAW" Source="80FFFFFF" />
        </Color>
    </Category>
    </Theme>
    ```

    暗色主题的标记集合模板：

    ```XML
    <Theme Name="MyAwesomeDarkTheme" ...>
    <!-- 此处存放已经存在的颜色标记 -->
    <Category Name="Shell" GUID="{73708ded-2d56-4aad-b8eb-73b20d3f4bff}">
        <Color Name="AccentFillDefault">
            <Background Type="CT_RAW" Source="FF9184EE" />
        </Color>
        <Color Name="AccentFillSecondary">
            <Background Type="CT_RAW" Source="80000000" />
        </Color>
        <Color Name="AccentFillTertiary">
            <Background Type="CT_RAW" Source="CC9184EE" />
        </Color>
        <Color Name="SolidBackgroundFillTertiary">
            <Background Type="CT_RAW" Source="FF282828" />
        </Color>
        <Color Name="SolidBackgroundFillQuaternary">
            <Background Type="CT_RAW" Source="FF2C2C2C" />
        </Color>
        <Color Name="SurfaceBackgroundFillDefault">
            <Background Type="CT_RAW" Source="FF2C2C2C" />
        </Color>
        <Color Name="TextFillSecondary">
            <Background Type="CT_RAW" Source="C8FFFFFF" />
        </Color>
    </Category>
    <Category Name="ShellInternal" GUID="{5af241b7-5627-4d12-bfb1-2b67d11127d7}">
        <Color Name="EnvironmentBackground">
            <Background Type="CT_RAW" Source="FF1C1C1C" />
        </Color>
        <Color Name="EnvironmentBorder">
            <Background Type="CT_RAW" Source="FF9184EE" />
        </Color>
        <Color Name="EnvironmentIndicator">
            <Background Type="CT_RAW" Source="66757575" />
        </Color>
        <Color Name="EnvironmentLogo">
            <Background Type="CT_RAW" Source="FF9184EE" />
        </Color>
        <Color Name="EnvironmentLayeredBackground">
            <Background Type="CT_RAW" Source="4D3A3A3A" />
        </Color>
    </Category>
    </Theme>
    ```

3.  根据需要调整模板的颜色值以适应旧主题。

# FAQ

## 为什么这是一项重大更改？

除了主题颜色标记结构和命名约定更改外，大部分 UI 代码已重构为使用 Fluent Design System 中的语义样式标记，而不是以前按功能划分的标记或内联样式。 虽然 SDK 中仍存在大多数旧颜色和其他样式资源，但它们可能不会反映最新设计或在现代化 UI 中一致的行为。

## 是否可以继续使用以前的标记？

以前的标记可能仍会对某些早期界面进行解析，但新重构的 UI 会优先读取新的语义标记。如果依赖于已弃用的标记，则存在主题配置不完整的可能。

## 哪里有经典蓝色主题？

我们用一系列彩色主题和增强对比度的编辑器外观选项来代替它。如果想要更贴近的致敬，还可以安装社区 [BlueSteel](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.BlueSteel) 主题。

## 标记的减少是否意味着自定义程度更低？

语义标记允许你通过调整小型调色板来产生大范围的视觉变化，但这并不意味着自定义程度变低。你仍然可以通过突出色调、背景亮度级别和系统填充来创造不同的风格。

## 性能影响？

重构减少了样式查找和冗余资源，提升了内存局部性，并简化了延迟画笔的创建。

## 编辑器颜色是否也会更改？

编辑器当前保留大部分旧版本语法着色。此更改面向 shell UI 共享图面，例如工具窗口、菜单和对话框。可以独立选择编辑器外观（包括额外对比度）。
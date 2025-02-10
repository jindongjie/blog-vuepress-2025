---
title: Theme Preview
author: pengzhanbo
createTime: 2023/12/25 01:28:29
sticky: true
tags:
  - preview
  - tags
permalink: /article/gk5drfor/
---

<!-- markdownlint-disable MD025 -->

# Heading H1

## Heading H2

### Heading H3

#### Heading H4

##### Heading H5

###### Heading H6

## Heading 2 Badge <Badge type="tip" text="Badge" />

### Heading 3 Badge <Badge type="warning" text="Badge" />

#### Heading 4 Badge <Badge type="danger" text="Badge" />

Body content.

@property CSS at-rule is part of the [CSS Houdini API](https://developer.mozilla.org/en-US/docs/Web/Guide/Houdini)
which allows developers to explicitly define [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*),
enabling type-checking, default values, and inheritance.

The introduction of @property greatly enhances CSS capabilities.

Bold text: **Bold Text**

Italic text: _Italic Text_

~~Strikethrough~~

Highlighted text: ==Marked Text==

Mathematical expression: $-(2^{n-1})$ ~ $2^{n-1} - 1$

$\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{ri}} {\omega^i} \right\}$

19th^

H~2~O

::: center
Centered content
:::

::: right
Right-aligned content
:::

- Unordered List 1
- Unordered List 2
- Unordered List 3

1. Ordered List 1
2. Ordered List 2
3. Ordered List 3

- [ ] Task List 1
- [ ] Task List 2
- [x] Task List 3
- [x] Task List 4

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

> Quoted content
>
> Quoted content

[Link](/)

[External Link](https://github.com/pengzhanbo)

![prototype](/images/js-prototype-1.png)

**Badge:**

- <Badge type="info" text="info badge" />
- <Badge type="tip" text="tip badge" />
- <Badge type="warning" text="warning badge" />
- <Badge type="danger" text="danger badge" />

**Icons:**

- home - <Icon name="material-symbols:home" color="currentColor" size="1em" />
- vscode - <Icon name="skill-icons:vscode-dark" size="2em" />
- twitter - <Icon name="skill-icons:twitter" size="2em" />

**demo wrapper:**

::: demo-wrapper title="Example" no-padding height="200px"

<style scoped>
.open-door {
  display: flex;
  gap: 20px;
  padding: 20px;
}
.open-door .main {
  background: #ccc;
}
</style>

<div class="open-door">
  <div class="main">main</div>
  <div class="aside">aside</div>
</div>

:::

**代码：**

```js whitespace
const a = 1;
const b = 2;
const c = a + b;

// [!code word:obj]
const obj = {
  toLong: {
    deep: {
      deep: {
        deep: {
          value:
            "this is to long text. this is to long text. this is to long text. this is to long text.", // [!code highlight]
        },
      },
    },
  },
};
```

**Code Blocks TwoSlash：**

```ts twoslash
// @errors: 2339
const welcome = "Tudo bem gente?";
const words = welcome.contains(" ");
```

```ts twoslash
import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send;
});
app.listen(3000);
```

```ts twoslash
import { createHighlighter } from "shiki";

const highlighter = await createHighlighter({
  themes: ["nord"],
  langs: ["javascript"],
});
// @log: Custom log message
const a = 1;
// @error: Custom error message
const b = 1;
// @warn: Custom warning message
const c = 1;
// @annotate: Custom annotation message
```

```ts twoslash
// @errors: 2540
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users".toUpperCase(),
  //  ^?
};

todo.title = "Hello";

Number.parseInt("123", 10);
//      ^|

//
//
```

```vue twoslash
<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <p>{{ count }}</p>
</template>
```

**代码分组：**

::: code-tabs
@tab tab1

```js
const a = 1;
const b = 2;
const c = a + b;
```

@tab tab2

```ts
const a: number = 1;
const b: number = 2;
const c: number = a + b;
```

:::

**代码块高亮：**

```ts
function foo() {
  const a = 1; // [!code highlight]

  console.log(a);

  const b = 2; // [!code ++]
  const c = 3; // [!code --]

  console.log(a + b + c); // [!code error]
  console.log(a + b); // [!code warning]
}
```

**代码块聚焦：**

```ts
function foo() {
  const a = 1; // [!code focus]
}
```

::: tip 仅标题
:::

::: note 注释
注释内容 [link](https://github.com/pengzhanbo) `inline code`

```js
const a = 1;
const b = 2;
const c = a + b;
```

:::

::: info 信息
信息内容 [link](https://github.com/pengzhanbo) `inline code`

```js
const a = 1;
const b = 2;
const c = a + b;
```

:::

::: tip 提示
提示内容 [link](https://github.com/pengzhanbo) `inline code`

```js
const a = 1;
const b = 2;
const c = a + b;
```

:::

::: warning 警告
警告内容 [link](https://github.com/pengzhanbo) `inline code`

```js
const a = 1;
const b = 2;
const c = a + b;
```

:::

::: caution 错误
错误内容 [link](https://github.com/pengzhanbo) `inline code`

```js
const a = 1;
const b = 2;
const c = a + b;
```

:::

::: important 重要
重要内容 [link](https://github.com/pengzhanbo) `inline code`

```js
const a = 1;
const b = 2;
const c = a + b;
```

:::

::: details 详细标题

这里是内容。
:::

**GFM alert：**

> [!note]
> note

> [!info]
> info

> [!tip]
> tip

> [!warning]
> warning

> [!caution]
> caution

> [!important]
> important

**代码演示：**

:::: demo title="常规示例" desc="一个常规示例"

::: code-tabs
@tab HTML

```html
<div id="app">
  <h3>vuepress-theme-plume</h3>
</div>
```

@tab Javascript

```js
const a = "So Awesome!";
const app = document.querySelector("#app");
app.appendChild(window.document.createElement("small")).textContent = a;
```

@tab CSS

```css
#app {
  font-size: 2em;
  text-align: center;
}
```

:::
::::

**选项卡：**

::: tabs
@tab 标题 1
内容区块

@tab 标题 2
内容区块
:::

:::: warning
::: tabs
@tab 标题 1
内容区块

@tab 标题 2
内容区块
:::
::::

**脚注：**

脚注 1 链接[^first]。

脚注 2 链接[^second]。

行内的脚注^[行内脚注文本] 定义。

重复的页脚定义[^second]。

[^first]: 脚注 **可以包含特殊标记**

    也可以由多个段落组成

[^second]: 脚注文字。

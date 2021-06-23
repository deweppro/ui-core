# DewepPro UI Core

## Note

_**The project is currently under development, and we recommend testing the components in your environment before using them in the product environment.**_

## Demo

[See demo](https://deweppro.github.io/ui-core/)

## Installation

```bash
  $ npm i @deweppro/core
```

## Examples

`styles.scss`

```css
@import "@deweppro/core/styles/base.css";
```

`app.module.ts`

```js
import { DuiCoreModule } from '@deweppro/core';

@NgModule({
  ...
  imports: [
    ...
    DuiCoreModule.forRoot(),
  ],
  ...
})
```

## Donate

You can support this and other projects by following the [link](https://sobe.ru/na/deweppro).

## jqt [![npm version](https://img.shields.io/npm/v/@srph/jqt.svg?style=flat)](https://www.npmjs.com/package/@srph/jqt)
A *low-level* node hiding / showing through css transitions.

Think of it as a low-level version of ng-animate or ReactCSSTransitionGroup in jQuery. Or maybe a low-level version of builtin jQuery animations such as `$.fadeOut`, `$.fadeIn`, `$.slideUp`, and `$.slideDown`.

## Installation
```bash
npm i @srph/jqt -S
```

Or if you prefer the [distribution file]() or [cdn](), why not? This library requires [jQuery](jquery) `>=1.8`.

## Usage
`jqt` is pretty simple.

```js
// Basic usage
var node = $(selector);
var jqt = node.jqt(opts);
jqt.enter();
jqt.hide();
```
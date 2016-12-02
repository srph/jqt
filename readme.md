## jqt
A *low-level* node hiding / showing through css transitions.

Think of it as a low-level version of ng-animate or ReactCSSTransitionGroup in jQuery. Or maybe a low-level version of builtin jQuery animations such as `$.fadeOut`, `$.fadeIn`, `$.slideUp`, and `$.slideDown`.

## Installation
```bash
npm i jqt -S
```

Or if you prefer the [distribution file](https://raw.githubusercontent.com/srph/jqt/master/index.js) or [cdn](https://cdn.rawgit.com/srph/jqt/master/index.js), why not? This library requires [jQuery](jquery) `>=1.8`.

## Usage
`jqt` is pretty simple.

```js
// Basic usage
var node = $(selector);
var jqt = node.jqt(opts);
jqt.enter();
jqt.hide();
```

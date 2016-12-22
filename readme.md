## jqt [![npm version](https://img.shields.io/npm/v/@srph/jqt.svg?style=flat)](https://www.npmjs.com/package/@srph/jqt)
A *low-level* jQuery plugin for node hiding / showing through css transitions.

Think of it as a low-level version of builtin jQuery animations such as [`$.fadeOut`](http://api.jquery.com/fadeout/), [`$.fadeIn`](http://api.jquery.com/fadein/), [`$.slideUp`](http://api.jquery.com/slideup/), and [`$.slideDown`](http://api.jquery.com/slidedown/) but with css classes. Or maybe something similar to [ng-animate](https://docs.angularjs.org/api/ngAnimate) or [ReactCSSTransitionGroup](https://facebook.github.io/react/docs/animation.html) for single elements in jQuery.

Checkout the demo [examples](https://srph.github.io/jqt). If you prefer, you can also check out the [guide](guide.md) to get started!

## Use case
I've never found any similar libraries outside frameworks. This library was massively *dogfed* for projects I handle at work, usually for tab transitions, menu animations, etc.

## Installation
Just include [`jqt.js`](https://raw.githubusercontent.com/srph/jqt/master/lib/jqt.js) after [jQuery](jquery) `>=3`.

```html
<script src="/path/to/jquery.js"></script>
<script src="/path/to/jqt.js"></script>
```

### npm
Just `require('@srph/jqt')` before running any jqt-related code.
```bash
npm i @srph/jqt -S
```

## Usage
```js
var node = $(selector);
var jqt = node.jqt(opts);
jqt.enter();
jqt.hide();
```

## API
### jqt = $(selector).jqt(opts)
Returns an object with two functions, `enter` and `leave`. The options are as follows:

| key | description | type | default |
|-----|-------------|------|---------|
|speed|Transition speed; amount of ms to wait before removing the element|`int`|200|
|delay|Amount of ms to wait before running the `enter` or `exit` process. Useful when you're waiting for another transition to finish|`int`|0|
|enter|Classname to append to the node before entering|`str`|`'enter'`|
|enterActive|Classname to append to the node after entering|`str`|`'enter-active'`|
|leave|Classname to append to the node before leaving|`str`|`'leave'`|
|leaveActive|Classname to append to the node after leaving|`str`|`'leave-active'`|
|display|The `display` style rule to apply to the element before entering|`str`|`'block'`|

### jqt.enter()
Shows the element.

In detail: First, it sets the node's `display` rule to block (default of `display`). Consequently, it applies the set `opts.enter` class, and then lastly applies the `opts.enterActive` class after the next tick.

### jqt.leave()
Hides the element.

In detail: First, it applies the `opts.leave` class, and then applies the `opts.leaveActive` class after the next tick. Lastly, it sets the element's `display` rule to `none` after the set transition speed (`opts.speed`)

## Examples
Checkout the demo [examples](https://srph.github.io/jqt) or its respective [source code](docs).

To run the examples locally, first clone the repo, and then run the following:
```
npm i
npm start
open docs/index.html
```
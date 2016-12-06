## jqt [![npm version](https://img.shields.io/npm/v/@srph/jqt.svg?style=flat)](https://www.npmjs.com/package/@srph/jqt)
A *low-level* node hiding / showing through css transitions.

Think of it as a low-level version of builtin jQuery animations such as [`$.fadeOut`](http://api.jquery.com/fadeout/), [`$.fadeIn`](http://api.jquery.com/fadein/), [`$.slideUp`](http://api.jquery.com/slideup/), and [`$.slideDown`](http://api.jquery.com/slidedown/) but with css classes. Or maybe something similar to [ng-animate](https://docs.angularjs.org/api/ngAnimate) or [ReactCSSTransitionGroup](https://facebook.github.io/react/docs/animation.html) for single elements in jQuery.

Checkout the demo [examples](https://srph.github.io/jqt).

## Use case
This library was **only** *dogfed* for tab transitions, menu animations, etc.

I have no use case for list transitions yet. It would require elements to be removed and appended properly. If you'd like this to be implemented, please submit an issue or preferrably a PR! If you'd like some help, let me know. I have an idea on how to implement this, but don't have the time to do so.

## Installation
```bash
npm i @srph/jqt -S
```

Or if you prefer the [distribution file](https://raw.githubusercontent.com/srph/jqt/master/index.js) or [cdn](https://cdn.rawgit.com/srph/jqt/master/index.js), why not? This library requires [jQuery](jquery) `>=1.8`.

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
```
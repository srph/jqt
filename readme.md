## jqt
A *low-level* node hiding / showing through css transitions.

Think of it as a low-level version of ng-animate or ReactCSSTransitionGroup in jQuery. Or maybe a low-level version of builtin jQuery animations such as `$.fadeOut`, `$.fadeIn`, `$.slideUp`, and `$.slideDown`.

## Installation
```bash
npm i jqt -S
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
|leave|Classname to append to the node before leaving|`int`|`'leave'`|
|leaveActive|Classname to append to the node after leaving|`int`|`'leave-active'`|
|display|The `display` style rule to apply to the element before entering|`str`|`'block'`|

### jqt.enter()
Shows the element.

In detail: First, it sets the node's `display` rule to block (default of `display`). Consequently, it applies the set `opts.enter` class, and then lastly applies the `opts.enterActive` class after the next tick.

### jqt.leave()
Hides the element.

In detail: First, it applies the `opts.leave` class, and then applies the `opts.leaveActive` class after the next tick. Lastly, it sets the element's `display` rule to `none` after the set transition speed (`opts.speed`).

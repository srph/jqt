## Getting Started
It's very easy to get the engines running. In this guide, we'll make a button that fades in and fades out.

The concept may be familiar those who have background with ReactCSSTransitionGroup or ng-animate. Anyway, welcome aboard!

Here's the [CodePen](http://codepen.io/srph/pen/jVRLxd) to preview the end-result of this guide.

## Setup the HTML
First, we'll setup our html.

```html
<button>Toggle Box</button> 
<div class="box" style="display: none;"></div>
```

> **Note**: It's important that we set elements with an inline-style set to `display: none;` if we want it to initially appear as hidden.

## Setup the CSS
This part is the most interesting part. This is where you'll put the instructions how the element will go in or out.

```sass
// This is only the styling rules for the
// element we'll animate in and out
.box {
  height: 50px;
  width: 50px;
  background: red;
}

// In the `enter` phase, this is how we want
// our element to start as. You can think of it
// as the initial look before animatinge.
// This is important so `enter-active` will actually animate.
.enter {
  opacity: 0;
}

// In the `enter-active` phase, this is how we want
// our element to animate as its appear.
.enter-active {
  opacity: 1;
  transition: 0.5s opacity ease-in;
}

// Similar to the `enter` phase. This is
// the initial properties we want the element to have
// before disappearing.
.leave {
  opacity: 1;
}

// Similar to the `enter-active` phase. This is
// how we want our element to animate as it disappears.
.leave-active {
  opacity: 0;
  transition: 0.5s opacity ease-in;
}
```

## Setup the script
This used to be either hard or tedious but, luckily, `jqt` lets us easily show or hide our element without much code.

```js
// The flag we'll rely to check
// whether we need to show or hide
// the button.
var active = false;

$('button').on('click', function() {
  if ( active ) {
  	$('.box').jqt({ speed: 500 }).exit();
  } else {
  	$('.box').jqt({ speed: 500 }).enter();
  }

  active = !active;
});
```

And with that, hopefully, you grasp the concepts of jqt. With a little spice of creativity, this library can be a powerful weapon in your arsenal.
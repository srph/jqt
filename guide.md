## Getting Started
This library is very easy to drop-in and get its engines running. In this guide, we'll make a button that fades in and fades out.

The concept may be familiar those who have background with ReactCSSTransitionGroup or ng-animate. If you haven't heard of them, welcome aboard!

Here's the [CodePen](http://codepen.io/srph/pen/jVRLxd) to preview the end-result of this guide.

<details>
	<summary>Setup jqt</summary>
	This guide assumes that you're using the old script tags.

	Just include [`jqt.js`](https://raw.githubusercontent.com/srph/jqt/master/lib/jqt.js) after jQuery `>=3`.
	
	```html
	<script src="/path/to/jquery.js"></script>
	<script src="/path/to/jqt.js"></script>
	```
</details>

<details>
	<summary>Setup the HTML</summary>
	First, we'll setup our html.
	```html
	<button>
	  Toggle Box
	</button>

	<div class="box" style="display: none;"></div>
	```
	> **Note**: It's important that we set elements with an inline-style set to `display: none;` if we want it to initially appear as hidden.
</details>

<details>
	<summary>Setup the CSS</summary>
	This part is the most interesting part. This is where you'll put the instructions how the element will go in or out.

	```css
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
</details>

<details>
	<summary>Setup the script</summary>
	We're finally in the last stage of this guide. I know it's been pretty long, but it's going to be all over shortly. Luckily, `jqt` lets us easily show or hide our element without much code.

	```js
	// The flag we'll rely to check
	// whether we need to show or hide
	// the button.
	var active = false;

	$('button').on('click', function() {
	  if ( active ) {
	  	$('box').jqt({ speed: 500 }).exit();
	  } else {
	  	$('box').jqt({ speed: 500 }).enter();
	  }

	  active = !active;
	});
	```
</details>

<details>
	<summary>Footer Notes</summary>
	- Checkout the [examples](https://srph.github.io/jqt).
	- Checkout the [API](https://github.com/srph/jqt#api) to check all the options accept by `.jqt(opts)`. This lets you configure the library's behaviors to suit your needs.
</details>

[← Back to the documentation](https://github.com/srph/jqt)
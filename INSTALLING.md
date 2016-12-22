# Installing
Just include [`jqt.js`](https://raw.githubusercontent.com/srph/jqt/master/lib/jqt.js) after [jQuery](jquery) `>=3`.

```html
<script src="/path/to/jquery.js"></script>
<script src="/path/to/jqt.js"></script>
```

## npm
> **Use case**: For Weback, Browserify, or Rollup users.

```bash
npm i @srph/jqt -S
```

Just `require('@srph/jqt')` before running any jqt-related code.

```js
var $ = require('jquery');
require('@srph/jqt');

$('.my-element').on('click', function() {
  // jqt-related code
});
```
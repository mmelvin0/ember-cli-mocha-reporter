# ember-cli-mocha-reporter

Improved test reporter for `ember-cli-mocha`.


## Installation

To add to your project:

```
ember install ember-cli-mocha
ember install ember-cli-mocha-reporter
```

Edit your `tests/test-helper.js` to add:

```javascript
import { mocha } from 'ember-mocha';
import Reporter from './helpers/ember-cli-mocha-reporter';

// ...

mocha.reporter(Reporter);
```

## Features

* Ember application container does not cover tests and slides in on hover.
* Code coverage support via ember-cli-blanket.
* No try/catch support so you can more easily debug your tests.


## Credit

Ember CLI addon assembled by [@mmelvin0](https://github.com/mmelvin0).

Contains code borrowed from:

* [gist](https://github.com/ef4/better-mocha-html-reporter) by Edward Faulkner ([@ef4](https://github.com/ef4));
* [gist](https://gist.github.com/SaladFork/15683b00388bfe1d1458) by Elad Shahar ([@SaladFork](https://github.com/SaladFork));
* [gist](https://gist.github.com/lolmaus/8b5e84762c85142e43c2) by Andrey Mikhaylov ([@lolmaus](https://github.com/lolmaus)).


## License

MIT license.

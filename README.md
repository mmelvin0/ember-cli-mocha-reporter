# ember-cli-mocha-reporter

Improved test reporter for ember-cli-mocha.

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

This adds the following features to ember-cli-mocha:

* Ember application container does not cover tests and slides in on hover (ef4)
* Code coverage support via ember-cli-blanket (SaladFork)
* No try/catch support so you can more easily debug your tests (lolmaus)

I fixed the following issues:

* Made a proper Ember-CLI addon with minimal edits required to your project
* No longer requires a custom Bower install of the url.js library
* Fixed to work with the current url.js library as an NPM dependency
* Don't scale the progress canvas

## Credit

This is based on the following code:

* https://github.com/ef4/better-mocha-html-reporter
* https://gist.github.com/SaladFork/15683b00388bfe1d1458
* https://gist.github.com/lolmaus/8b5e84762c85142e43c2

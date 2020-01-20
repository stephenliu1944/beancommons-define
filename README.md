# @easytool/define-config
Config global variables for webpack DefinePlugin.

## Install
npm install -D @easytool/define-config

## Usage
package.json
```js
"dependencies": {
    ...
},
"devDependencies": {
    ...
},
"global": {
    "__DEV__": true,
    "__WWW__": "http://localhost:8080",
    "__SEARCH__": "http://localhost:8081",
    "__REPORT__": "http://localhost:8082",
    "__MAP__": "http://localhost:8083"
}
```

webpack.config.dev.babel.js
```js
import define from '@easytool/define-config';
import pkg from './package.json';

var global = pkg.global;

new webpack.DefinePlugin({
    ...define(global)
    // return {"__DEV__": true, "__WWW__": "http://localhost:8080"...}
})
// or
new webpack.DefinePlugin({
    ...define(global, false)
    // return {"__DEV__": false, "__WWW__": false...}
})
```

## API
```js
/**
 * @param {object} options global constants options.
 * @param {boolean} enabled enable options value, default true, false will set all values to false.
 * @return {object} - return a handle options.
 */
function define(options, enable);
```
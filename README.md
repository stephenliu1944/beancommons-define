# @middlend/define
Define global variable for webpack DefinePlugin.

## Install
npm install -D @middlend/define

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
    "WWW": "http://localhost:8080",
    "SEARCH": "http://localhost:8081",
    "REPORT": "http://localhost:8082",
    "MAP": "http://localhost:8083"
}
```

webpack.config.dev.babel.js
```js
import define from '@middlend/define';
import pkg from './package.json';

var global = pkg.global;

new webpack.DefinePlugin({
    ...define(global)
    // return {"__DEV__": true, "WWW": "http://localhost:8080"...}
})
// or
new webpack.DefinePlugin({
    ...define(global, false)
    // return {"__DEV__": false, "WWW": false...}
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
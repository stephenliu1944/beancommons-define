# @beancommons/define
Define global variable for webpack DefinePlugin.

## Install
npm install --save @beancommons/define

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
    "WWW": "http://localhost:8080",
    "SEARCH": "http://localhost:8081",
    "REPORT": "http://localhost:8082",
    "MAP": "http://localhost:8083"
}
```
webpack.config.dev.babel.js
```js
import { define } from '@beancommons/define';
import pkg from './package.json';

var global = pkg.global;

new webpack.DefinePlugin({
    ...define(global)       // return "WWW": "http://localhost:8080"...
    // or
    ...define(global, '__', '__')   // return "__WWW__": "http://localhost:8080"...
})
```

## API
```js
function define(options, prefix = '', suffix = '');
```
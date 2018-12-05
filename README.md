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
    __DEV__: true,
    'process.env.NODE_ENV': JSON.stringify('development')
    ...define(global)
})
```

## API
```js
function define(options, prefix = '__', suffix = '__');
```
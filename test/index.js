/** 
 * 该类用于开发调试, 打包时会忽略此文件.
 */
import define from '../src/index';

console.log(define({
    __DEV__: true,
    __DEV2__: 'true',
    WWW: 'http://localhost:8080'
}));
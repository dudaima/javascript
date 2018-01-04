/**
 * JavaScript 字符串
 */

log = console.log;
// -- 001 --
// 续航符是 反斜线 \
// -- code --
var s = 'abc\
efg ';

log(s) // abcefg 没有换行没有空格

var s2 = 'abc'
+ 'efg'; // 这个写法也可以 
// -- code end  --

// -- 002 反斜杠的用法
/*
 * 1. 转义 \a \n \t ....
 * 2. \HHH 八进制  000 --> 377
 * 3. \xHH 十六进制
 * 4. \uXXXX 四个十六进制
 *
 */

// -- code --
if( '\u007A' === 'z' && '\x7A' === 'z' && '\172' === 'z' ) {
    log("yes");
}

// -- code end --


// -- 003 -- 字符串和数组
// -- code --
log('abc'[3]);  // undefined
log('abc'[-1]); // undefined
log('abc'['x']); // undefined

// 字符串无法改变单个字符
var s = "hello";
delete s[0];
log(s);     // hello

// length 无法被改变
s.length = 1000;
log(s.length);  // 5 


log("我的祖国".length); // 4

// -- code end -- 


// -- 994 -- base64
// btoa(), atob() 仅仅使用ascii, 浏览器支持， nodejs 不支持
// -- code  --
// nodejs 写法
console.log(Buffer.from('Hello World!').toString('base64'));
console.log(Buffer.from("SGVsbG8gV29ybGQh", 'base64').toString());

// 浏览器写法
function b64Encode(str) {
      return btoa(encodeURIComponent(str));
}

function b64Decode(str) {
      return decodeURIComponent(atob(str));
}
// -- code end -- 




/*
 * Javascript function
 *
 */ 

log = console.log;

// -- 001 -- 函数 可以复用的代码块，能接受参数，能根据参数返回值。

// -- 002 -- 函数的三种声明方式
/*
 * 1. function 命令
 * 2. 函数表达式
 * 3. Function 构造函数
 */
// -- code --
function print(s) { log(s); } // 命令方式
var print = function(s) { log(s); } // 表达式方式 
var print = function p(s) { log(s); } // 这种方式函数内部可以调用自己, 也方便排错
// log(p); p 没有定义的
var print = new Function ('s', 'log(s);'); // 构造方式, 最后一个语句，其他都是参数。

// -- code end --

// 表达式方式，赋值语句右边必须是表达式。


// -- 003 -- js 的函数知识
/*
 * 1. 函数声明和变量一样会提升，回被覆盖（后面覆盖前面）。
 * 2. 函数没有 return , 返回 undefined
 * 3. 函数是一等公民，函数可以看做是一种值。凡是可以用值得都可以用函数。
 * 4. 标准(es5)规定不能再条件语句中声明函数，但是有些浏览器支持, nodejs也支持
 * 5. 函数的属性有 name, length 预期的参数个数，不是真实的个数。通过 length 和真实的参数个数可以实现函数的重载。
 * 6. 函数的属性 toString() 返回函数的定义。包括注释。
 * 7. 函数的作用域， js(ec5)中只用两种作用域 **全局作用域**, **函数作用域**, es6 新增 **块作用域**, 变量不管在按个作用域都会提升。
 * 8. arguments 对象 -- 读取函数内部的所有产生, 真实的参数个数可以用  arguments.length; 
 */

// --  code --

var multiline = function (fn) {
    var arr = fn.toString().split('\n');
    return arr.slice(1, arr.length - 1).join('\n');
};

function f() {/*
    这是一个
    多行注释
*/}

/**
 *  这是一个
 *  多行注释
 */
log(multiline(f));


var f = function() {
    // nodejs 可以修改
    'use strict'; // 使用严格模式， arguments 可以修改，但是不报错。
    arguments[0] = 100;
    log( arguments);
    // arguments 是个对象，转换成数组
    // 严格模式 args 前面要有 var
    var args = Array.prototype.slice.call(arguments);
    // 或者这样转换
    var args = [];
    for(var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
    }
}

// { '0': 'a', '1': 1, '2': [ 2, 3 ] }
f("a", 1, [2,3]);


// arguments 带有 callee 属性，返回对应的原函数
var f = function() {
    log(arguments.callee === f ); // true
}
f();

// -- code end --


// -- 004 -- 闭包(closure); 解决函数外部获取函数内部变量的问题。

// -- code --
/*
 * f2 就是闭包函数， 函数内外的一个桥梁。
 * 闭包可以让这些变量始终在内存中
 * 
 */

// 内外桥梁的例子
function f1() {
    var n = 999;
    function f2() {
        //log(n);
        return n;
    }
    return f2(); // 这里返回的是 f2 的调用
}

log(f1());


// 一直在内存的例子
function fint(start) {
    return function () {
        return start++;
    }
}

var inc = fint(1);
log(inc()); // 1
log(inc()); // 2
log(inc()); // 3

// 使用闭包封装私有属性

function Person(name) {
    var _age;
    function setAge(n) {
        _age = n;
    }
    function getAge() {
        return _age;
    }

    return {
        name: name,
        getAge: getAge,
        setAge: setAge
    }
}

var p1 = Person('张三');
p1.setAge(25);
log(p1.getAge()); // 25

// -- code end --



// -- 005 -- 立即调用函数 IIFE
// 好处 1. 避免污染全局变量。 2. 形成单独的作用域。

//-- code --
// 错误的写法  function(){}; function 
function f() {};

// 立即调动的写法， 末尾 分号必须写上
(function () {}());
(function () {})();

//-- code --

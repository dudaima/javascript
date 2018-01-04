/*
 * Javascript Object
 *
 */

log = console.log;
// Object 无序的键值对

// -- 001  键的自动转换 ,不过是数字则必须用引号，否者报错比如 1b, b1 --
// --- code ---
var obj = {
    1: 'a',
    3.2: '3.2',
    1e2: 100,
    1e-2: 0.01,
    .234: 0.234,
    0xFF: 255
};


log(obj['3.2']); // 3.2
log(obj['1']); // a
log(obj['100']); // 100


// --- code end ---



// -- 002 -- 对象的引用，多个名字指向同一个对象，则对一个的操作会影响其他的,因为他们执行同一个地址。原始类型的不会这样
// -- code --

var o1 = {};
var o2 = o1;

o1.a = 1;
log(o2.a); // 1 
delete o2;
log(o1.a); // 删除 o2 , o1还在

// -- code end --


// -- 003 -- 表达式还是语句
// {foo:123} 首行是大括号是语句, foo: 是标签，  ({foo:123}) 是对象

// -- code -- 
log(eval('{foo: 123}'));    // 123
log(eval('({foo: 123})'));  // { foo: 123 }

// -- code end --


// -- 003 -- 属性操作
// -- code --
var obj = {
    p: "hello world"
};

log(obj.p); 
log(obj['p']); // p不加引号会被解析成变量

var foo = "bar";
var obj = {
    foo: 1,
    bar: 2
}

log(obj[foo]);  // 2


// -- code end --


// -- 004 -- 基本操作
// -- code --
var obj = {
    key1 : 1,
    key2 : 2
}

log(Object.keys(obj)); // [ 'key1', 'key2' ]
delete obj.key1;

log(Object.keys(obj)); // [ 'key2' ]


// p 属性不能删除
var obj = Object.defineProperty({}, 'p', {
      value: 123,
      configurable: false
});

log(delete obj.p); // false
log(delete obj.not_exists_key); // true 如果键不存，返回真 

// delete 只能删除本身的属性，不能删除继承的属性
var obj = {};
delete obj.toString
log(obj.toString); // [Function: toString]


// in 检查是否包含某个属性, 但是不能区分是自己的还是继承的
var obj = { p: 1 };
'p' in obj // true

// for in 遍历自身和继承的属性， 但是仅仅是遍历可以遍历的 enumerable，比如 toString就是不能遍历的
var obj = {a: 1, b: 2, c: 3};

for (var i in obj) {
      console.log(obj[i]);
}


// hasOwnProperty 判读对象是否自身的
var person = { name: '老张' };

for (var key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key);
    }
}

// with 的使用注意点， with 内的变量赋值，必须是对象有的属性，否则会创建全局变量。

// -- code end --


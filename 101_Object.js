/*
 * Javascript Object
 */


log = console.log;

// -- 001 -- Ojbect 
/*
 * JavaScrip 提供原生的 Object对象，其他的所有对象都继承这个对象。
 * Object 本身也是一个构造函数， 可以通过它生成对象
 *
 * var obj = new Object();
 *
 * Object 作为构造函数，接收一个参数
 * 1. 如果该参数是原始类型值，返回该值对应的包装对象。
 * 2. 如果该参数是一个对象，直接返回这个对象
 */


var o1 = {a:1};
var o2 = new Object(o1);

log(o1 === o2); // true

log(new Object(123) instanceof Number); // true
log(new Object(123) instanceof Object); // true

var fn = function() {};
log(Object(fn)); // [Function: fn]

if(fn = Object(fn)) {
    log(true); // true
}


// -- 002 --
/**
 * 对象上部署方法
 */

// 可以在 Object 直接部署方法
Object.print = function (o) { log(o); };

var o = new Object();  
Object.print(o); // {}

// 通过 prototype 部署
Object.prototype.print = function () { console.log(this); }
var o = {};
o.print(); // {}

var o = [];
o.print(); // []

var o = Number('1');
o.print(); // [Number: 1]


// -- 003 -- 静态方法
/*
 * 1. Object.keys()  // 返回可遍历的属性
 *  -- 对象属性模型的相关方法
 * 2. Object.getOwnPropertyNames() // 返回全部的属性名 
 * 3. Object.getOwnPropertyDescriptor(); // 获取某个属性的attributes对象。
 * 4. Object.defineProperty()：通过attributes对象，定义某个属性。
 * 5. Object.defineProperties()：通过attributes对象，定义多个属性
 * -- 控制对象状态的方法
 * 6. Object.preventExtensions()：防止对象扩展。
 * 7. Object.isExtensible()：判断对象是否可扩展。
 * 8. Object.seal()：禁止对象配置。
 * 9. Object.isSealed()：判断一个对象是否可配置。
 * 10. Object.freeze()：冻结一个对象。
 * 11. Object.isFrozen()：判断一个对象是否被冻结。
 *
 * -- 原型链相关方法
 * 12. Object.create()：该方法可以指定原型对象和属性，返回一个新的对象。
 * 13. Object.getPrototypeOf()：获取对象的Prototype对象。
 */

var a =  ["hello", "world"];
log(Object.keys(a)); // [ '0', '1' ]
log(Object.getOwnPropertyNames(a)); //  [ '0', '1', 'length' ]

log(Object.keys(a).length); // 2
log(Object.getOwnPropertyNames(a).length); // 3


// -- 004 -- Object 实例的方法
/*
 * 1. valueOf()：返回当前对象对应的值。
 * 2. toString()：返回当前对象对应的字符串形式。
 * 3. toLocaleString()：返回当前对象对应的本地字符串形式
 * 4. hasOwnProperty()：判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性。
 * 5. isPrototypeOf()：判断当前对象是否为另一个对象的原型。
 * 6. propertyIsEnumerable()：判断某个属性是否可枚举。
 *
 */

log([1,2,3].toString()); // 1,2,3
log("123".toString()); //123

log({}.toString()); // [object Object]


/*
 * [object Object]
 * [object Number]
 * [object String]
 * [object Boolean]
 * [object Undefined]
 * [object Null]
 * [object Math]
 * [object Object]
 * [object Array]
 */
log( Object.prototype.toString.call(2) ); // [object Number]
log( Object.prototype.toString.call('')  ); // 
log( Object.prototype.toString.call(true) ); // 
log( Object.prototype.toString.call(undefined) ); // 
log( Object.prototype.toString.call(null) ); // 
log( Object.prototype.toString.call(Math) ); // 
log( Object.prototype.toString.call({})  ); // 
log( Object.prototype.toString.call([]) ); // 

var type = function (o){
    var s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

log(type({})); // object
log(type(/abcd/)); // regexp



[
    'Null',
    'Undefined',
    'Object',
    'Array',
    'String',
    'Number',
    'Boolean',
    'Function',
    'RegExp'
    ].forEach(function (t) {
        type['is' + t] = function (o) {
            return type(o) === t.toLowerCase();
        };
    });

//type.isObject({})
//type.isRegExp(/abc/)

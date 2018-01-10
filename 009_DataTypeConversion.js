/*
 * Javascript DataTypeConversion
 *
 */
log = console.log;

// -- 001 -- 强制数据类型转化  Number, String, Boolean

/**
 * Number() 转换规则
 * 1. 字符串、布尔值、undefiend 、 null 被转换成数值**或者NaN**
 * 2. Number将字符串转化成数值比parseInt 严格，有一个不能转化就返回NaN
 * 3. 单值数组处理单值， 其他的对象返回 NaN
 */


log(Number('0xf')); // 15
log(Number('12a')); // NaN
log(Number(true)); // 1
log(Number(false)); // 0
log(Number("\t\v\r12.34\n")); // 12.34 自动过滤空白字符

// 对象处理
log(Number({}));        // NaN
log(Number([12]));      // 12
log(Number(["a"]));     // NaN
log(Number([1,2]));     //NaN 

// -- code -- 
var obj = { x: 1};
Number(obj); // NaN

if(typeof obj.valueOf() === 'object') {
    Number(obj.toString());
} else {
    Number(obj.valueOf());
}
// ---------------------------


var obj = {
    valueOf: function () {
        return {};
    },
    toString: function() {
        return {};
    }
}

//Number的过程, 产生是对象 先调用  valueOf, 返回的不是原始值 调用　toString
//Number(obj); // TypeError: Cannot convert object to primitive value


// -- code end --





// -- 002 -- String
/**
 * String 的抓换规则
 *
 * 1. 数值 转换成数值的字符串形式
 * 2. 字符串 还是字符串
 * 3. 布尔值 true 转换成 "true", false 转换成  "false"
 * 4. undefined 转换成  "undefined"
 * 5. null 转换成  "null"
 *
 * 6. 对象返回对象的 toString 方法. 如果返回的不是原始类型(数值、字符串， 布尔， undefiend , null) ,先使用 valueOf 然后再用 toString 和 interget 刚好相反
 * 7. 数值返回数值的字符串形式
 *
 */
 

 log(String({a:1})); // [object Object]
 
 if(String({a:1}) === {a:1}.toString()) {
     log("yes"); // 输出 yes
 }


// 报错的的例子

var obj = {
    valueOf: function () {
        log("valueOf");
        return {};
    },

    toString: function () {
        log("toString");
        return {};
    }
}

// String(obj); // TypeError: Cannot convert object to primitive value



// -- 003 -- Boolean 转换规则
/*
 * undefined , null, -0, 0, +0 , NaN, '' 返回 false, 其他全是 true
 *
 */

log(Boolean({}));   // true
log(Boolean(NaN));  // false

// -- 004 -- 自动转换的示例
log(1+'a');// 1a ＋的字符优先
log(+{a: 1}); // NaN
log(-[1, 2]); // NaN 非数值使用一元运算符
log(-[1]);      // -1
log(+[1]);      // 1
log([]); // []
log(5+[]); // 5
log('5' +[]); // 5
log('5' + function () {}); // 5function () {} 
if("abc") { log("run"); } // run












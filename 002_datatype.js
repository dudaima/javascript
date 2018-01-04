/*
 * 数据类型
 *
 */
log = console.log;

// -- 001 --
/*
 * js 中一共有七种数据类型 
 *  1. number 
 *  2. string
 *  3. boolean
 *  4. undefiend
 *  5. null
 *  6. object
 *  7. symbol -- ES6
 *
 *  number, string, boolean 是原来类型 (primitive type)
 *  oject 是合成类型 (complex type), 有三个子类 object (狭义的), array, function 
 *  undefined , null 特殊值
 */


// -- 002 判读值的类型 --
//  typeof, instantceof, Object.prototype.toString

// -- code --
function f() {};
log(typeof 123);    // number
log(typeof "abc");  // string
log(typeof true);   // boolean
log(typeof {});     // object
log(typeof f);      // function
log(typeof []);     // object 
log(typeof null);   // object 历史原因

// -- code end --


// -- 003 对象和数组 --
// -- code --
if(typeof [] === typeof {}) {
    log( "typeof [] === typeof {}");
}


if([] instanceof   Array) {
    log("[] 的类型是是 Array");
} else {
    log("[] 的类型不是 Array");
}
// -- code --



// -- 004 知识点 --
// -- code --
if(!'') {
    log("空字符的布尔值是false");
}

if([] && {}) {
    log("空数组和空对象都是true");
}


if(undefined || null || false || 0 || NaN || ""  | '') {
    
} else {
    log("if 中的都是  false");
}

// -- code end --

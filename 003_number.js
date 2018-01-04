/**
 * JavaScript Number
 */

log = console.log;
// -- 001 ---
// js 内部只有64位的浮点数，如果是整数的运行则转换成32位的整数
// -- code --
if( 1=== 1.0) {
    log("1 === 1.0"); // true
}

if( 0.1 + 0.2 != 0.3) {
    log(" 0.1 + 0.2 不等于 0.3");
}


log(0.3/0.1); // 2.9999999999999996

// -- code end --


// -- 002 --
// 获取极值
// -- code --
log(Number.MAX_VALUE);  //log(Number.MAX_VALUE); 
log(Number.MIN_VALUE);  // 5e-324
// -- code end --

// -- 003 --
// 进制
/*
 * 1. 十进制没有前导的 0
 * 2. 八进制前导0o
 * 3. 十六进制前导 0x
 * 4. 二进制前导 0b
 */
// -- code --
log( (10).toString(16));    //  a ， 10 必须被小括号包括
log( (012).toString(10));   // 10, 8进制转 10进制
log( (0xa).toString(2));    // 1010 , 十六进制转2进制

// 第二参数是进制，第一个参数是值
log(parseInt(10, 2));       //  2, 10 用二进制表示是 2
log(parseInt(0xf, 10));      // 15, 0xf 用十进制是 15 
// -- code end --


// --- 004 ---
// 0 ，无穷， NaN(Not a Number)
// 0 有两个，正0和负0，只有作为分母的时候值不同
// -- code --
log(1/-0);  //-Infinity
log(1/0);  //Infinity

log( 1-'x');   // NaN
log( Math.acos(2)); // NaN
log( Math.sqrt(-1)); // NaN
log( 0 / 0);        // NaN 

log(typeof NaN); 


if( NaN != NaN) {
    log( "NaN 不等于 NaN");
}

log( [NaN].indexOf(NaN)); // -1 , indexOf 内部使用严格相等运算


log(0/0);   // NaN
log(1/0);   // Infinity

if( (Infinity > NaN) || (0 > NaN)) {
    
} else {
    log( "任何数给 NaN比较都返回 false");
}


// -- code end --


// -- 005 --
// parseInt , parseFloat
// 不能转换返回 NaN
// -- code --
log(parseInt('ab'));    // NaN
log(parseInt([]));      // NaN
log(parseInt('0x10'));  // 16
log(parseFloat("1.23e2")); // 123

// -- code end --
// isNaN, isFinite 是否是一个正常的数字, Infinity, NaN 都不是
// -- code --
log(isFinite(Infinity));    // false
log(isFinite(1.2));         // true

log(isNaN(NaN)); // true
log(isNaN('ab')); // true, 如果传入的不是数值，会被转换成数值最后进行判断
log(Number('ab')); // NaN

function myIsNaN(value) {
    return value !== value;  // 只有 NaN 不等于自己
}


// -- code end --

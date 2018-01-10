/*
 * Javascrpt operator
 * 
 */

log = console.log;

// -- 001 -- 加法
/*
 * 若果是对象转换成(valueOf)原始值, 如果还不是原始值执行(toString).
 * 如果有一个是字符串执行字符串的拼接， 否者转成数值计算
 */
 

log(1 + 'a'); // 1a
log(1 + '1'); // 11 
log(String([1,2]) + String([3])); // 1,23

log(new Date() + 1); // Fri Jan 05 2018 17:22:46 GMT+0800 (CST)1
log(new Date() - 0); // 1515144195277


// 负数取余数是 -1
log(-101 % 2); // -1
log(-100 % 2); // -0
log( -0 === 0); // true

// 奇数的判读可以
function isOdd(n) {
    return n%2 !== 0;
}

log( isOdd(-1)); // true

// 或者通过 Math
function isOdd(n) {
    return Math.abs(n%2) === 1;
}
log( isOdd(-1)); // true

// 数值运算符（+）， 负数运算符 （-） 不是加法和减法，是一元运算符
log(+true); // 1
log(+[]); // 0
log(+{}); // NaN 
log(-true); // -1
log(-[]); // -1
log(+{}); // NaN

// 字符串比较, 支持 unicode
log('a' < 'bcd'); // true

// 原始类型比较是都是先转换成数值再比较， 但是等号(==, === 不是);
log(5>'4'); // true <==> log ( Number(5) > Number('4');
log(5 == '5'); // true 
log(5 === '5'); // false 

log( true > false); // <==> log(Number(true) > Number(false));

// 任何给 NaN 比较的都返回 false

// 对象的比较，先调用 valueOf, 然后调用 toString , Data对象是先调用 toString, 然后调用 valueOf

log([2].valueOf()); // [ 2 ]
log([2].valueOf().toString()); // "2"
log([2] > [11]); // true 

// 对象都是相等的 valueOf -> toString  最后都是 [object Object] 
log({x:2}.valueOf()); // { x: 2 }
log({x:2}.valueOf().toString()); // [object Object]

// 这个结果很奇怪
console.log({x: 2} == {x: 1} ); // false 
console.log({x: 2} > {x: 1} );  // false
console.log({x: 2} >= {x: 1} ); // true


// 同一类型的符合类型(object, array, function)比较，比较的是他们是否指向了同一个对象
var o = {x: 1, y: 2}
var o1 = o;
o1.x = 100;

log( o == o1); // true


// 相等运算
// 原始类型的数据会转换成数值类型再比较
log(1 == true); // true
log(0 == false); // true
log('' == 0); // true

// 对象(object, array, function)与原始比较, 对象会转化成原始值。
log([1] == true); // true  <==> Number([1]) == Number(true);

// undefied 和 null 给其他类型比较都返回 false
log(false == null); // false

// 相等运算
log('' == '0'); //false 没有类型转化
log(0 == '' ); // true  有类型转化
log(0 == '0'); // true  有类型转化

log(' \t\r\n ' == 0) ;// true


// 位运算 >>> 带符号右移
// void 空运算 












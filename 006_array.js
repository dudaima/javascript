/*
 * Javascript array
 */

log = console.log;

// -- 001 --  数组的本质是特殊的对象, 数组不用为每个元素指定键名，对象需要给每个元素指定键名。
// -- code --
var arr = [
    {a:1},
    [1,2],
    function () { return true; }
];
log(typeof arr); //object
log(Object.keys(arr)); // [ '0', '1', '2' ]
log(arr[0]);    // { a: 1 }
// !!! arr.0  写法错误

// -- code end --


// -- 002 -- 数组的属性 length
// 
// -- code --
var arr = ['a', 'b', 'c'];
log(arr.length); // 数组的长度是3
arr[99] = "99";

/*
 * arr[0] = a
 * arr[1] = b
 * arr[2] = c
 * arr[99] = 99
 *
 */
for (var i in arr) {
    log( "arr[" + i + "] = " + arr[i] );
}

/**
 * 这里输出的是 100，可以看到数组是动态的， length 比最大的键值大一。
 */
log(arr.length); 


/* 
 * 通过修改 length 可以减少数组的长度
 * 所以清空数组可以用  arr.length = 0;
 *
 * arr[0] = a
 * arr[1] = b
 * arr[2] = c
 */
arr.length = 2;
for (var i in arr) {
    log( "arr[" + i + "] = " + arr[i] );
}


/**
 * 通过合法的非非负整数获取数组的值时候，如果键不存在，返回 undefined; 
 * 不是null, 也不会报错
 */
var arr = [1,2,3];
arr.length = 100;

log(arr[10]);   // undefined
log(arr[1000]); // undefined


/**
 * RangeError
 * [].length = -1;
 * [].length = Math.pow(2, 32)
 * [].length = 'abc'
 */


// -- code end --


// -- 003 -- 类数组对象， array-like object 
// 类数组对象其实就是对象，没有数组的方法， length 不是动态的。
// 典型的的 array-like object 是 arguments, dom元素集合 和 字符串
// -- code --

var obj = {
    0 : "a",
    1 : "b",
    2 : "c",
    length: 3
}

// [TypeError] obj.push('d'); 


function args() { return arguments }
var arrayLike = args('a', 'b');

arrayLike[0] // 'a'
arrayLike.length // 2
arrayLike instanceof Array // false


'abc'[1] // 'b'
'abc'.length // 3
'abc' instanceof Array // false


/*
var elts = document.getElementsByTagName('h3');
elts.length // 3
elts instanceof Array // false
*/

// ** slice ** 可以将 *类数组* 变成真正的数组
arrayLike = { '0': 'a', '1': 'b', length: 3 };
log(arrayLike);
var arr = Array.prototype.slice.call(arrayLike);
log(arr);
log(typeof arr); //object
log( arr instanceof Array); // true 

// 类数组使用数组的其他方法，通过 call

/**
 * 1 : a
 * 2 : b
 *
 * 这里指定的 length = 3, 所有输出的只有两个
 * 如果 length 没有指定，就是0， 就不会有任何输出
 */

Array.prototype.forEach.call( 
        {1: "a", 2: "b", 3: "c", length: 3}, 
        function (value, index) {
            log(index + ' : ' + value);
        }
);


/**
 * 下面这两个函数是等价的
 */
function logArgs() {
    Array.prototype.forEach.call( arguments, function (elem, i) {
        log(i + '. ' + elem);
    });
}

function logArgs2() {
    for(var i = 0; i < arguments.length; i++) {
        console.log(i + '. ' + arguments[i]);
    }
}


// 输出 a b c
Array.prototype.forEach.call('abc', function (chr) {
      console.log(chr);
})

// 输出 a b c
var arr = Array.prototype.slice.call('abc');
arr.forEach(function (chr) {
      console.log(chr);
});


// -- code end --



// -- 004 --  in 运算符
// 检查建师是否在在对象中，也适用数组

// -- code --
var arr = [ 'a', 'b', 'c' ];
log(2 in arr)  // true
log('2' in arr) // true
log(4 in arr) // false


// for in 

for ( var key in arr ) {
    log(key);
}

// for
for (var i = 0; i < arr.length; i++) {
    log(arr[i]);
}

// forEach 用户数组
["red", "green", "blue"].forEach(function (color) {
    log(color);
});

// -- code end --
//

// -- 005 -- 数组的空位

// -- code -- 
var a = [ 1, , 3];
log(a.length); // 3
log(a[1]); // undefined;

// 删除一个数组的元素，不影响数组的长度, 会形成一个空位
delete a[2];
log(a[2]); // undefined
log(a.length); // 3

// for...in , Object.keys, forEach 遇到空位会跳过
/*
 * 0 =>1
 * 2 =>3
 * 3 =>undefined
 */
[1,,3, undefined].forEach(function (x, i) {
    log(i + ' =>' + x);
});



// -- code end -- 




/*
 * JavaScript Error
 *
 * 
 */


// -- 001 -- Error 对象
/*
 * Js 原生提供一个 Error 的构造函数， 所有抛出的错误都是这个构造函数的的实例。
 * Error对象接收一个参数，有三个属性 message, name, statck
 *
 *
 */

log = console.log;

var err = new Error("出错了");

log(err.name + ":" + err.message);// Error:出错了

// statck 示例

function throwit() {
    throw new Error("-- throwit --");
}

function catchit() {
    try {
        throwit();
    } catch(e) {
        log(e.stack);
    }
}

//catchit();


// -- 002 -- JavaScript 的错误类型
/*
 * Error 是最一般的错误类型，在这个基础上建立了6个
 * 1. SyntaxError 这个是发生**代码解析的时候的错误**
 * 2. ReferenceError
 * 3. RangeError
 * 4. TypeError
 * 5. URIError
 * 6. EvalError ec5中已经不用了  保留的， eval 没有被正确的执行，为了和之前的代码兼容。
 */

// 可以捕获的类型错误
try {
    console.lg() = 1;
} catch(e) {
    log(e.name + ":" + e.message ); // TypeError:console.lg is not a function
}


// 不能破获的的类型错误
/*
try {
    this = 1;
} catch(e) {
    log(e.name + ":" + e.message ); 
}
*/


try {
    new Array(-1);
} catch(e) {
    // RangeError:Invalid array length
    log(e.name + ":" + e.message ); 
}


try {
    var obj = {};
    obj.not_exists_emthod();
} catch (e) {
    // TypeError:obj.not_exists_emthod is not a function
    log(e.name + ":" + e.message ); 
}

// URIError:URI malformed
try {
    decodeURI('%0');
} catch(e) {
    log(e.name + ":" + e.message ); 
}


// 虽然有问题，但是什么也不输出
try {
    eval("cssssfsd;sdfsd");
} catch(e) {
    log(e.name + ":" + e.message ); 
}



// -- 003 -- 自定义错误

function UserError(message) {
    this.message = message || "默认信息";
    this.name = "UserError";
}

UserError.prototype = new Error();
UserError.prototype.constructor = UserError;

try {
   throw  new UserError("错误");
   log("not run"); // 这里就不执行了
} catch (e){
    // UserError:错误
    log(e.name + ":" + e.message ); 
} finally {
    log("无论如何这里都会执行");
}



// -- 004 -- throw 
/**
 *  throw 中断程序的执行，抛出一个意外或者错误， 接收一个表达式，额可以各种类型
 *
 *  throw { toString: function () { return "Error!"; });
 */









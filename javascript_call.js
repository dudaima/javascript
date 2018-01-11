/**
 * Javascript call
 *
 */


log = console.log;

// -- code -- 001 
function Product(name, price) {
    this.name = name;
    this.price = price;

    if(price < 0) {
        throw RangeError('Cannot create product ' + this.name + ' with a negative price' );
    }
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}

// 抛出异常
//var food = new Food("food", -1);



// -- code -- 002 
// #0 Lion: King
// #1 Whale: Fail
var animals = [
{species: 'Lion', name: 'King'},
{species: 'Whale', name: 'Fail'}
];

for (var i = 0; i < animals.length; i++) {
    (function (i) { 
        this.print = function () { 
            console.log('#' + i  + ' ' + this.species + ': ' + this.name); 
        } 
        this.print();
    }).call(animals[i], i);
}




// -- code -- 003

var Parent = function () {
    this.name = "yjc";
    this.age = 22;
}

var child = {};


Parent.call(child);
log(child); // { name: 'yjc', age: 22 }





// -- code -- 004

function cat() {

}

cat.prototype = {
    food: "fish",
    say: function () {
        log("I love " + this.food );
    }
}

var blackCat = new cat;
blackCat.say();


whiteDog = { food: "bone"};

// I love bone
blackCat.say.call(whiteDog);

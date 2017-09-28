// TODO: add your solutions here!

// 1
var combination = (string_1 , string_2) => string_1+string_2;

// 2
var repeat= (phrase,num) => {if (num>0) {console.log(phrase); repeat(phrase,--num)} }

// 3
var exponent = (base,power) => {if (power === 0) {return 1;} else if(power>0) { return base * exponent(base,power -1)} else {return 1/exponent(base, -power)}};

// 4
var cirleArea = r => 3.14159*(r*r);

// 5
var pyth = (a , b) => (a*a) + (b*b);

//6
var divisible = (x,y) => {if (y%x===0){return true} else{ return false};};

//7
var vowel = a => {
    for (var v = 0, i = 0; i < a.length; i++) {
        if (a[i] === "a" || a[i] === "e" || a[i] === "i" || a[i] === "o" || a[i] === "u") {
            v += 1
        };
    }
    return v;
}

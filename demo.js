console.log('Abbu dah...');
console.log(10);
console.log({mine:"abbu",Age:19});
console.table({mine:"abbu",Age:19});
console.log([1,2,34,5,6]);
console.table([1,2,34,5,6]);

var a=5;
let b = 7;
const c =6;
console.log(a);
console.log(b);
console.log(c);

a=(1);

console.log(typeof "a");
console.log(a);
console.clear();
console.log(a==3);
console.log(a!=3);
console.log(a>=3);

console.log(a>=3 || a==5 || b>a);

var o=a=="abbu"?"a has value" : "a does'nt have value";
console.log(o);

//mark
m=100;
var score=(m>=90 && m<=100)? "Distinction" : (m>=70 && m<=89)? 
"Grade a" : (m>50 && m<=69)?"grade b": (m>35 && m<=49)?"grade c" : "fail"
console.log(score);
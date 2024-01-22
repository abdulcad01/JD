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
console.clear();
//if else



function marks(m)
{
    if(m>=35 && m<=50)
    {
    console.log("Just Pass");
    }
    else 
    {
        console.log("f");
    }
     
    
}
marks(50);
console.clear();
//nested if else
function abbu(m)
{
    if (m>=0 && m<=34)
    {
        console.log("Reappear");
    }
   else if(m>=35 && m<=50)
   {
    console.log("Grade C");
   }
   else if (m>=51 && m<=75)
   {
    console.log("Grade B");
   }
   else if (m>=76 && m<=89)
   {
    console.log("Grade A");
   }
   else if (m>=90 && m<=100)
   {
    console.log("Distinction");
   }
   else {
    console.log("Enter the mark");
   }
}
abbu(1);
console.clear();
//switch

function switchcase(m)
{
 switch(m){
 case 1:
    console.log("leo");
    break;

    case 2 :
        console.log("Thunivu");
        break;

        case 3 :
            console.log("Jailer");
            break;

            case 4 :
                console.log("Vikram");
                break;

                case 5 :
                    console.log("Etharkum Thunindhavan");
                    break;

                    case 6 :
                        console.log("Japan");
                        break;

        default:
            console.log("Enter the actor name correctly");
 }
}
switchcase(10);
console.clear();
//prompt

function prom()
{
    var namee = ("Enter your name");
    console.log( "You gonna have a great day" +" " + namee);
}
prom();
console.clear();
 function math()
 {
    var one = prompt("Enter the first value");
    var two = prompt("Enter the second value");

    var sum = one + two;
    var sub = one - two;
    var multiply = one * two;
    var div = one / two;


    console.log( "sum" +" " + "=" + " " + sum);
 }
 math();

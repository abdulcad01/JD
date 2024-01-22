function condition()
{
    var Customer = document.getElementById("names").value

    console.log(Customer);
    //while loop

while(Customer<20)
{
 console.log(Customer + " smaller than 20" )
Customer++;
}

//do while

do{
    console.log(Customer + " smaller than 20" )
    Customer++;
}
    while(Customer<20)


// for loop
for(Customer;Customer<50;Customer++)
{
console.log( Customer +" is smaller than 50 " );
}


}

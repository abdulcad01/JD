function result()
{

    var name = ["abbu","abdul","rahman","saran","jeevi"];

   console.log("length of the names",name.length); 
   console.log(name[0]);
   console.log(name[1]);
   console.log(name[2]);
   console.log(Math.PI);
   console.log(Math.E);
   console.clear();

   
for (var a=0; a<name.length;a++)
{
    console.log(name[a]);
}

var result =  name.forEach(function(name1)
{
    console.log(name1);
})
console.clear();

var result = name.forEach(name1=>
     console.log(name1));

     console.clear();
     const x = 5;
     for(let i =0;i=5;i++)
     {
        console.log("abbu");
     }


 
}
result();
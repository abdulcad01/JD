function arrayfun()
{
    var letter = "Hi I am abbu";

    console.log(letter.length);
    console.log(letter.indexOf("abbu"));
    console.log(letter.indexOf("abbu",1));
    console.log(letter.lastIndexOf("I"));
    console.log(letter.search("abbu"));

    //Arrays
    let arr = letter.search(/abbu/gi);
    console.log(arr);

    let arr1 = letter.match(/abbu/);

    
    //Time Based Keyword

    let today = new Date();
    console.log(today.toDateString());
    console.log(today.toISOString());
    console.log(today.toJSON());
    console.log(today.toLocaleDateString());
    console.log(today.toLocaleString());
    console.log(today.toLocaleTimeString());
    console.log(today.toString());
    console.log(today.toTimeString());
    console.log(today.toUTCString());
    console.log(today.getTimezoneOffset());
    console.log(today.getDay());
    console.log(today.getFullYear());
    console.log(today.getHours());
    console.log(today.getMilliseconds());
    console.log(today.getMinutes());
    console.log(today.getMonth());
    console.log(today.getSeconds());
    console.log(today.getUTCDate());
    console.log(today.getUTCDay());
    console.log(today.getUTCFullYear());
    console.log(today.getUTCHours());
    console.log(today.getUTCMilliseconds());
    console.log(today.getUTCMinutes());
    console.log(today.getUTCMonth());
    console.log(today.getTimezoneOffset());
}
arrayfun();
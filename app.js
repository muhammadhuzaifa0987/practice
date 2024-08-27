/*// Practice if & else statement 
var  age = +prompt("Enter Your  age");
if(age  >= 18){
    alert("Registration is successful");

}else{
    alert("You are not eligible");
}

 var a = prompt("ENTER YOUR VALUE");
 var b = prompt("Enter your value");
 if(a > b){
    alert ("a is greater than b")
 }else{
    alert("a is not greater than b")
 }
//Comparsion OPERATORS

var name = "Huzaifa";
if(name==="Huzaifa"){
    alert("is correct");
}
var ticketno = prompt("ENTER YOUR TICKET NUMBER!");
if(ticketno === 2006){
    alert ("you are lucky");
}else if(ticketno !== 2006){
    alert("try again next time");
}
else {
    alert("Try again");
}*/
//ARRAY
var fruits=["Apple", "Mango", "pineapple", "orange"];
console.log(fruits);

var cities =["Karachi","Islamabad","Lahore"];
console.log(cities);

//ARRAY push method
var fruits=["Apple", "Mango", "pineapple", "orange"];
fruits.push("banana");
console.log("fruits",fruits);

var cities =["Karachi","Islamabad","Lahore"];
cities.push("Quetta","Multan");
console.log("cities",cities)

//ARRAY pop method

var Countries= ["Pakistan","India","Australia","China","Israel"];
Countries.pop();
console.log("Countries",Countries);

var things =["Laptop","Mobile","Tablet","Iphone"];
things.pop();
console.log("things",things);

//ARRAY shift method

var Names =  ["Hunain","Ali","Rayyan", "Bilal","Huzaifa"];
Names.shift();
console.log("Names",Names);

var  things=["Laptop","Mobile","Tablet","Iphone"];
things.shift();
console.log("things",things);

//ARRAY Unshift Method

var Names=["hunain ","Ali","Rayyan","Bilal",];
Names.unshift("Huzaifa", "Amir");
console.log("Names",Names);

var vegetables =["onion", "potatoes", "tomotoes"];
vegetables.unshift("Cucumber","chilli");
console.log("vegetables",vegetables);

//Array slice method
 var a=["talha","amir","hamza","huzaifa"];
 var b = a.slice(1,4);
 console.log("slicedNames",b);

 //ARRAY Splice Method
 var c=["Irfan",'ahmed',"bilal"];
 c.splice(1,1,"huzaifa","hunain");
 console.log("splicenames", c);


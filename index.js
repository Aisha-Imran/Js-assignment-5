// 

//Q#1
//function power(a,b){
//     var result=a**b
//     console.log(result)

// }
// var a=parseInt(prompt("enter value"))
// var b=parseInt(prompt("enter value"))
// power(a,b)

//Q#1
// function power (a,b){
//     var result=a**b
//     console.log(result)
// }
// var a=parseInt(promp("enter value"))
// var b=parseInt(prompt("enter value"))
// power(a,b)

//Q#1
// function power(a,b){
//     var result=a**b
//     console.log(result)
// }
// var a=parseInt(prompt("Enter value"))
// var b=parseInt(prompt("Enter value"))
// power(a,b)

//q#2
// function leapYear(year){
//     if (year%4==0) {
//         console.log("It's a leap year")

//     } else {
//         console.log("It's not a leap year")

//     }
// }
// var year=prompt("Enter year")
// leapYear(year)

//Q#2
// function leapYear(year){
//     if (year%4==0){
//         console.log("It's a leap year")
//     } else{
//         console.log("It's not a leap year")

//     }        
    
// }
// var year=prompt("Enter year")
// leapYear(year)

//Q#2
// function leapYear(year){
//     if(year%4==0){
//         console.log("It's a leap year")
//     } else{
//         console.log("It's not a leap year")
//     }
// }
// var year=prompt("Enter year")
// leapYear(year)

// //q#3
// function Area(S,a ,b,c){
//     let area=S*(S-a)*(S-b)*(S-c)
//     console.log(area + "units")
// }
// function sum(a,b,c){
//     var S=(a+b+c)/2

//     Area(S,a,b,c)

// }
// var a=parseInt(prompt("enter sides of triangle"))
// var b=parseInt(prompt("enter sides of triangle"))
// var c=parseInt(prompt("enter sides of triangle"))
// sum(a,b,c)

//Q#3


//q#4
// function average(sub1, sub2, sub3) {
//     if (sub1 <= 100 && sub2 <= 100 && sub3 <= 100) {
//         var average = (sub1 + sub2 + sub3) / 3
//         console.log(average)
//     }

// }

// function percentage(sub1, sub2, sub3) {
//     var marksObtained = sub1 + sub2 + sub3
//     var totalMarks = 300
//     var percentage = (marksObtained / totalMarks) * 100
//     console.log(percentage)
// }
// function main() {
//     var sub1 = parseInt(prompt("Enter marks of sub 1"))
//     var sub2 = parseInt(prompt("Enter marks of sub 2"))
//     var sub3 = parseInt(prompt("Enter marks of sub 3"))

//     average(sub1, sub2, sub3)
//     percentage(sub1, sub2, sub3)
// }
// main()

//q5


//q6
// function remVowel(str)
// {
//     let al = [ 'a', 'e', 'i', 'o', 'u',
//                'A', 'E', 'I', 'O', 'U' ];
//     let result = "";
     
//     for(let i = 0; i < str.length; i++)
//     {
         
//         if (!al.includes(str[i]))
//         {
//             result += str[i];
//         }
//     }
//     return result;
// }
// let str =prompt("enter string")
// document.write(remVowel(str));

//q7


function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var chars = str.toLowerCase().split("");
    var count = 0;
    
    // Loop over every character
    for(let i = 0; i < chars.length - 1; i++) {
      var char = chars[i];
      var next = chars[i + 1];
      
      // Increase count if both characters are any of the following: aeiou
      if(isCorrectCharacter(char) && isCorrectCharacter(next)) {
        count++
      }
    }
    
    return count;
  }
  
  // Check if a character is any of the following: aeiou
  function isCorrectCharacter(char) {
    switch (char) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        return true;
      default:
        return false;
    }
  }
  
  var found = findOccurrences();
  
  console.log(found);


//q8

// var userinput=parseInt(prompt("Enter input in km"));
// function meters(userinput){
    
//     var km=userinput
//     var km_Into_m=km*1000

//     console.log(km_Into_m)
// }
// function feet(userinput){
//     var km=userinput
//     var km_Into_ft=(km*3280.84)

//     console.log(km_Into_ft)
// }

// function inches(userinput){
//     var km=userinput
//     var km_Into_inches=(km*39370.1)

//     console.log(km_Into_inches)
// }

// function centimeters(userinput){
//     var km=userinput
//     var km_into_cm=(km*100000)

//     console.log()
// }
// meters(userinput)
// feet(userinput)
// inches(userinput)
// centimeters(userinput)


//Q#9

// var rate_per_hour=12
// var hoursWorked=parseInt(prompt("Enter working hours"))
// if (hoursWorked>40) {
//     var amount=(hoursWorked-40)*12
//     console.log("Overtime amount is"+" "+amount)
    
//  } else{
//     console.log("You haven't worked overtime")
//  }

 //Q#10
//  function countCurrency(amount)
//     {
//         let notes = [ 100,50,10,1 ];
//         let noteCounter = Array(4).fill(0);
//         console.log(noteCounter)
        
//         // count notes using Greedy approach
//         for (let i = 0; i < noteCounter.length; i++) {
//             if (amount >= notes[i]) {
//                 noteCounter[i] = Math.floor(amount / notes[i]);
//                 console.log(noteCounter[i])
//                 amount = amount - noteCounter[i] * notes[i];
//                 console.log(amount)
//             }
//         }
        
//         // Print notes
//         console.log(noteCounter)
//     console.log("Currency Count ->" + "\n");
//         for (let i = 0; i <noteCounter.length; i++) {
//             if (noteCounter[i] != 0) {
//                 console.log(notes[i] + " : "
//                     + noteCounter[i] + "\n");
//             }
//         }
//     }
//     let amount =470;
//     countCurrency(amount);

    

    

    












//chp 43-48

// function handleDelete(){
//     document.getElementById('t1').innerHTML=''
    

// }



// var clicks = 0;

// function onClick() {
//   clicks += 1;
//   document.getElementById("clicks").innerHTML = clicks;
// };
// function onClick1() {
//     clicks -= 1;
//     document.getElementById("clicks").innerHTML = clicks;
//   };
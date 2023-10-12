// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guest5:string[]=["Ayman","Urooba","Ayyan"];
let cannotAttend4:string="Ayyan";  
let newGuest4:string="Tania";
guest5[guest5.indexOf(cannotAttend4)]=newGuest4;
// console.log(guest5);
// guest3.map((item)=>console.log(`Dear ${item},I found a bigger dinner table.`));
let guestBegin2:string="Tariq"
guest5.unshift("Tariq");
// console.log(guest3);
let middlesGuest3:string="Zaveri"
let middleIndex3= guest5.length/2
guest5.splice(middleIndex3,0,middlesGuest3);
// console.log(guest3);
guest5.push("Amaya");
// console.log(guest3);
// guest3.map((item)=>console.log(`Dear ${item}, Your are invited to a dinner`));
console.log(guest5.length+  "peoples"+  " "+ "are invited to dinner");


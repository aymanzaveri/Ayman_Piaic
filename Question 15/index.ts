// // More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guest3:string[]=["Ayman","Urooba","Ayyan"];
let cannotAttend2:string="Ayyan";  
let newGuest2:string="Tania";
guest3[guest3.indexOf(cannotAttend2)]=newGuest2;
console.log(guest3);
// guest3.map((item)=>console.log(`Dear ${item},I found a bigger dinner table.`));
let guestBegin:string="Tariq"
guest3.unshift("Tariq");
// console.log(guest3);
let middlesGuest:string="Zaveri"
let middleIndex= guest3.length/2
guest3.splice(middleIndex,0,middlesGuest);
// console.log(guest3);
guest3.push("Amaya");
// console.log(guest3);
// guest3.map((item)=>console.log(`Dear ${item}, Your are invited to a dinner`));


// // Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guest4:string[]=["Ayman","Urooba","Ayyan"];
let cannotAttend3:string="Ayyan";  
let newGuest3:string="Tania";
guest4[guest4.indexOf(cannotAttend3)]=newGuest3;
console.log(guest4);
// guest3.map((item)=>console.log(`Dear ${item},I found a bigger dinner table.`));
let guestBegin1:string="Tariq"
guest4.unshift("Tariq");
// console.log(guest3);
let middlesGuest1:string="Zaveri"
let middleIndex1= guest4.length/2
guest4.splice(middleIndex1,0,middlesGuest1);
// console.log(guest3);
guest4.push("Amaya");
// console.log(guest3);
// guest3.map((item)=>console.log(`Dear ${item}, Your are invited to a dinner`));
console.log("I can invite only two people to dinner");
while(guest4.length>2){
    let removeGuest=guest4.pop()
    console.log(`Dear ${removeGuest}, You are not invited to the dinner`);
}
guest4.map((item)=>console.log(`Dear ${item},Yo are still invited to the dinner`));
guest4.pop();
guest4.pop();
console.log(guest4);
 




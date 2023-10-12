// // Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guest2:string[]=["Ayman","Urooba","Ayyan"];
console.log(guest2);

let cannotAttend:string="Urooba";
console.log(cannotAttend+" " + "can not make it,for dinner");
let newGuest:string="Tania"
guest2[guest2.indexOf(cannotAttend)]=newGuest;
guest2.map((item)=>console.log(`Dear ${item}, You are invited to a dinner`));


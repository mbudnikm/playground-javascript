//Zombie apocalypse


alert("It is the zombie apocalypse. You are looting a store and suddenly a zombie bursts through the door!");

let weapon = prompt("You search frantically for a weapon. What do you choose? A bow and arrow, an axe, or a rubber chicken?");
let randomNumber = Math.round(Math.random()); 


alert("You attacked the zombie with your " + weapon);

if(randomNumber === 0)
{
  alert("The Zombie bites you. You lose!!!");
}
else if(randomNumber === 1)
{
  alert("You kill the zombie with your " + weapon + "You win!");
}
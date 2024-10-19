
var Mypet = {
}




 Mypet.petName =  prompt("what is your favourite pet Name ");
 Mypet.petType = prompt("what is the type of your pet ");
 Mypet.petAge  = prompt("what is the age of your pet");
 Mypet.petHappiness = prompt("what is happiness level of your pet");
 Mypet.petHungry = prompt("How much your pet is hungry");


//  console.log(Mypet)
var a = true;
while (a) {
  var casev = prompt("what your want to do with the pet"
         + "1. Feed , 2 . play, 3. Age , 4 . quite " );
   switch(casev){
    case 1:
        alert("your pet is being feed ");
        break;
    case 2:
        alert("your pet happiness has increesed");
        break;
    case 3:
        alert("your pet age is increased and happiness is decreased by 10");
        break;
    case 4:
        exit();
        a = false;
   } 
    

    

}





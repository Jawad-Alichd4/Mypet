
var Mypet = {
     

  a: true,
   feed: function () {
        alert("your pet has been feed")
       },
    play:   function() {
        alert("your pet happiness has increased")
       },

     age: function() {
        alert("your pet age is increased and  happiness is decreased")
       },
    quite:  function() {
      alert("goodbye")  
    Mypet.a = false;
   }
}





 Mypet.petName =  prompt("what is your favourite pet Name ");
 Mypet.petType = prompt("what is the type of your pet ");
 Mypet.petAge  = +prompt("what is the age of your pet");
 Mypet.petHappiness = +prompt("what is happiness level of your pet");
 Mypet.petHungry = +prompt("How much your pet is hungry");


//  console.log(Mypet)
// var a = true;
while (Mypet.a) {
  var casev = +prompt("what your want to do with the pet"
         + "\n1. Feed"
         + "\n2.play"
         + "\n3.age"
         + "\n4.quite"

         );
   if(casev === 1) {
    Mypet.feed();
   }
   else if(casev === 2) {
    Mypet.play();
   }
   else if(casev === 3) {
    Mypet.age();
   }
   else if(casev === 4) {
    Mypet.quite();
   }

//    switch(casev){
//     case 1:
//       Mypet.feed();
//         break;
//     case 2:
//         Mypet.play();
//         break;
//     case 3:
//         Mypet.age();
//         break;
//     case 4:
//         Mypet.quite();
        
//    } 

}





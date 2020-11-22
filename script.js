 
const random = Math.floor(Math.random()*3)+1 ;  // Create random number
      //console.log(random);
const getRandEvent = () => {
    // return 'Marathon' or 'Triathlon' or 'Pentathlon' randomly;
  switch (random) {
  case 1: return "Marathon";
  case 2: return "Triathlon";
  case 3: return "Pentathlon";
};
}
  //console.log(getRandEvent());
  // The scope of `days` is too tight 
const getTrainingDays = condition => {
var days ="";
switch (condition) {
  case "Marathon"  :
   days =  50;
  break;
  case  "Triathlon"  :
   days = 75; 
  break;
  case  "Pentathlon" : 
   days = 100;
   break;
  }
  return days;

}
console.log(getTrainingDays("Marathon"))

var name = 'Nala';

const logEvent =(name ,condition  ) => {
  
  console.log(`${name}'s condition is: ${condition}`);
};

const logTime = (  name, days)  => {
 
  console.log(`${name}'s time to train is: ${days} days`);
};

const condition = getRandEvent();
const days = getTrainingDays(condition);


logEvent(name , condition );
logTime(name , days );

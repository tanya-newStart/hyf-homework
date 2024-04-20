let fullname1;
let fullname2;

function getFullname(firstname,lastname,useFormalName){
    if(firstname === "" || lastname === ""){
        alert("You did not enter your first and last name");
    }
    if (useFormalName){
        return "Lord " + firstname + " " + lastname
    }
    else{
    return firstname + " " + lastname;
    }
}
fullname1 = getFullname("Benjamin", "Hughes",true); // returns "Benjamin Hughes"
fullname2 = getFullname("Tanya", "Dewland");// add html input for gender? 
console.log(fullname1);
console.log(fullname2);

getFullname("Benjamin", "Hughes", true); // returns "Lord Benjamin Hughes"`
console.log(getFullname("Benjamin", "Hughes", false)); // returns "Benjamin Hughes"
//console.log(getFullname("",""));

//Day of the week
// With todays weekday a tuesday
function getEventWeekday(num){
    const today = new Date();
    let weekday = today.getDay();
    let week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    let day_index = (weekday + num)%7;
    return week[day_index];

}
console.log(getEventWeekday(1));
console.log(getEventWeekday(5));


// What to wear

function smartWear (temp){
    const clothes = ["shorts and a t-shirt", "jeans and a sweater", "light coat", "winter coat and a winter hat"];
    if(temp>=18){
      return clothes[0];
    }
    else if( temp<=17 && temp>12){
        return clothes[1];
    }
    else if( temp<=12 && temp>=5){
        return clothes[2];
    }
    else if(temp<5 && temp>=-5){
        return clothes[3];
    }
    else{
        return "Stay home! It's freezing!";
    }
}
const clothesToWear = smartWear(-8);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt"
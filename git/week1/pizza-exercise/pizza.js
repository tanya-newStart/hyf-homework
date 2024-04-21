console.log("I love pizza");
const favorite = "cheese";
const price = 20;
const num = 5;
const isfamilyPizza = true;

console.log(`New pizza order: ${favorite}. The price of the pizza is:  ${price}`)

function totalPrice(price,num,isfamilyPizza){
    if(isfamilyPizza){
        return price*num*2;
       }
    return price*num;
    
}
console.log(totalPrice(10,4,true));
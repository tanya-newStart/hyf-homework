const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
let count = 0;
button1.addEventListener("click", function () {
  count++;
  button1.innerHTML = count;
});
//add setTimeout();
button2.addEventListener("click", function () {
  setTimeout(() => {
    count--;
    button2.innerHTML = count;
  }, 3000);
});
//on click change the button 3 text after 3 sec

button3.addEventListener("click", function () {
  setTimeout(function () {
    button3.innerHTML = "This was logged out after 3s";
  }, 3000);
});

const loaded = () => {
  console.log("loaded");
};
window.addEventListener("load", loaded);

//setInterval.Save position every second, after 30 sec log out average. Use reduce function
const arrayX = [];
const arrayY = [];

const mousePosition = (e) => {
  let positionX = e.clientX;
  let positionY = e.clientY;
  arrayX.push(positionX);
  arrayY.push(positionY);
};
window.addEventListener("mousemove", mousePosition);
const calculateAverage = (array) => {
  const sum = array.reduce((acc, el) => acc + el, 0);
  return sum / array.length;
};

setTimeout(() => {
  const averageX = calculateAverage(arrayX);
  const averageY = calculateAverage(arrayY);
  console.log(averageX, averageY);
  window.removeEventListener("mousemove", mousePosition);
}, 5000);

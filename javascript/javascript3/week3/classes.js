const user = {
  name: "Zlata",
  age: 18,
  introduce: function () {
    console.log(`hi,${this.name}!`);
  },
};

user.introduce();

const generalCar = {
  horn: function () {
    console.log("Beep-beep!");
  },
};

const aygo = {
  color: "yellow",
  wheels: 4,
  horn: generalCar.horn,
};

aygo.horn();

const camery = Object.create(generalCar);
camery.color = "green";
console.log(camery);

const car1 = {
  color: "red",
  wheels: 4,
};

const car2 = {
  color: "yellow",
  wheels: 4,
};

// factory function: returns object
function createCar(color, wheels) {
  return {
    color,
    wheels,
  };
}

const car3 = createCar("blue", 4);
console.log(car3);

class Car {
  constructor(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
    this.introduce();
  }
  horn() {
    console.log("beep-beep");
  }

  introduce() {
    console.log(`the car is ${this.name}`);
  }
}

const car4 = new Car("camry", "purple", 4);
car4.introduce();

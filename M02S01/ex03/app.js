const Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,
  topSpeed: 10,
  topReveseSpeed: -10,
  displaySpeed: function () {
    console.log(`Viteza curenta este ${this.speed}.`);
  },
  accelerate: function () {
    this.setSpeed(this.speed + 1);
  },
  decelerate: function () {
    this.setSpeed(this.speed - 1);
  },
  setSpeed: function (speed) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReveseSpeed) {
      speed = this.topReveseSpeed;
    }

    this.speed = speed;

    this.displaySpeed();
  },
};

const audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;
audi.topSpeed = 260;
audi.topReveseSpeed = -100;

console.log(audi);

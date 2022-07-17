class Phone {
  constructor(type, color, size, ram, chargingTime, numberOfCameras) {
    this.type = type;
    this.color = color;
    this.size = size;
    this.ram = ram;
    this.chargingTime = chargingTime;
    this.numberOfCameras = numberOfCameras;
  }
  changeColor(color) {
    this.color = "color";
  }
}
const myPhone = new Phone("Smart phone", "Black", 5.1, 64, 90, 5);
const myNewColor = new Phone("blue");

console.log(myPhone);
console.log(Phone.name);
console.log(myNewColor.changeColor("orange"));
console.log(myNewColor);

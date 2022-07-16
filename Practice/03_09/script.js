/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },

  changeName: function (name) {
    this.name = name;
  },

  changeVolume: function (volume) {
    this.volume = volume;
  },

  changePocketNum: function (pocketNum) {
    this.pocketNum = pocketNum;
  },

  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};
backpack.changeName("big backpack");
backpack.changeVolume(50);
backpack.changePocketNum(30);

console.log("change backpack name to ", backpack.name);
console.log("change backpack volume to ", backpack.volume);
console.log("change backpack pocket number to ", backpack.pocketNum);

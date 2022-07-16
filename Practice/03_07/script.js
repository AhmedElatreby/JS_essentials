/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 *
 * @format
 */
const phone = {
  type: "smartphone",
  color: "black",
  size: 5.2,
  ram: 512,
  coverColor: {
    outside: "black",
    inside: "brown",
  },
};
console.log("The color of the phone is: ", phone.color);
console.log(phone.color);
console.log("The color of the inside cover is ", phone.coverColor.inside);

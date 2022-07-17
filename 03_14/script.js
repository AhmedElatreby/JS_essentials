/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "../03_15/Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

// Book challenges

const python = new Book(
  "Python for beginners",
  "John Smith",
  2000,
  "Programming",
  19.99,
  150,
  true
);
console.log(python);

const java = new Book(
  "Java for beginners",
  "John Smith",
  2010,
  "Programming",
  10.99,
  120,
  false
);
console.log(java);

const django = new Book(
  "django for beginners",
  "John Smith",
  2010,
  "Programming",
  12.99,
  10,
  true
);
console.log(django);

const noSql = new Book(
  "NoSQL for beginners",
  "John Smith",
  2012,
  "Programming",
  19.99,
  150,
  false
);
noSql.updateReadStatus(true);
console.log(noSql);

const cSharp = new Book(
  "C# for beginners",
  "John Smith",
  2000,
  "Programming",
  19.99,
  150,
  true
);
cSharp.updateCurrentPage(90);
console.log(cSharp);

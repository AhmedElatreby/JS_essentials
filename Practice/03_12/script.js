/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 *
 * @format
 */

class TV {
	constructor(
		// Defines parameters:
		type,
		size,
		color,
		number_of_usb,
		number_of_hdmi,
		wireless
	) {
		//Define properties:
		this.type = type;
		this.size = size;
		this.color = color;
		this.number_of_usb = number_of_usb;
		this.number_of_hdmi = number_of_hdmi;
		this.wireless = wireless;
	}
	// Add methods like normal functions:
	tv_color(color) {
		this.color = "color";
	}
}

const myTv = new TV("smartTV", 35, "black", 3, 2, false);
const myTVColor = new TV("black");
console.log("testing my tv: ", TV);
console.log("number of usb:", TV.number_of_usb);

console.log("TV color:", myTVColor.color);

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

const pc = {
	type: "Desktop",
	spec: "core i7",
	color: "black",
	monitor: {
		right: "hdmi",
		left: "vag",
	},
	printer: true,
	pcType: function (pcTypeChange) {
		this.pcType = "laptop";
	},
};

console.log("pc number of montior: ", pc.monitor.right);

console.log(" pc type before:", pc.type);

console.log(" pc type after:", pc.pcType);

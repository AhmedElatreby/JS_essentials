/**
 * Create a Backpack object.
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

const backpack = {
	name: "Everyday Backpack",
	volume: 30,
	color: "grey",
	pocketNum: 15,
	strapLength: {
		left: 26,
		right: 26,
	},
	lidOpen: false,
	toggleLid: function (lidStatus) {
		this.lidOpen = lidStatus;
	},
	newStrapLength: function (lengthLeft, lengthRight) {
		this.strapLength.left = lengthLeft;
		this.strapLength.right = lengthRight;
	},
};

console.log("The backpack object:", backpack);
console.log("The pocketNum: ", backpack.pocketNum);
console.log("Strap lenght", backpack.strapLength.left);

console.log("pc number of montior: ", pc.monitor.right);

console.log(" pc type before:", pc.type);

console.log(" pc type after:", pc.pcType);

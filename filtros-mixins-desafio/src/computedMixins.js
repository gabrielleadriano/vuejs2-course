export default {
	computed: {
		textWithComma() {
			return this.text2.split(" ").join(",");
		},
		textWithSize() {
			return this.text
				.split(" ")
				.map((m) => `${m} (${m.length})`)
				.join(" ");
		},
	},
};

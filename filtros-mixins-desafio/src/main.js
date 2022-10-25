import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// Exercício 2
// Filtro global que conta o tamanho de cada palavra e adiciona o
// 	valor na string final
Vue.filter("countWords", function(value) {
	return value
		.split(" ")
		.map((m) => `${m} (${m.length})`)
		.join(" ");
});

new Vue({
	render: (h) => h(App),
}).$mount("#app");

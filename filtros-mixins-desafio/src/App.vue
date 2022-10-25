<template>
  <div id="app">
    <h1>{{ title | spaceForComma }}</h1>
    <p>{{ text | countWords }}</p>
    <hr />
    <!-- Exercício 3 -->
    <!-- Implementar os exercicios 1 e 2 com propriedade computada -->
    <h1>{{ textWithComma }}</h1>
    <p>{{ textWithSize }}</p>
  </div>
</template>

<script>
import computedMixins from "./computedMixins";
export default {
  //   Exercício 1
  //   Construir um filtro local que troca espaços por vírgula
  filters: {
    spaceForComma(value) {
      return value.split(" ").join(",");
    },
  },
  // Exercício 4
  // Compartilhe a propriedade computada via mixin
  mixins: [computedMixins],
  data() {
    return {
      title: "Filtros & Mixins (Desafio)",
      text: "Pedro é legal",
      text2: "Propriedade computada por mixin",
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>

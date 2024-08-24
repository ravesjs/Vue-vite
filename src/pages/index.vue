<template>
  <Layout>
    <div class='burger-container'>
      <ul v-for="burger in burgers">
        <li><img src="/src/shared/assets/images/burger.jpg" alt="burger" /></li>
      </ul>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Layout from '@/widgets/layout'

const burgers = reactive([1, 2, 3, 4, 5])
</script>

<style scoped>
img {
  width: 200px;
  border-radius: 5px;
}
ul > li {
  list-style: none;
}
button {
  background-color: aqua;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  filter: drop-shadow(5px 5px 5px rgb(88, 88, 188));
}
.burger-container {
  display: flex;
  justify-content: center;
  align-items: center;
	flex-wrap: wrap;
	flex-basis: 50%;
}
</style>
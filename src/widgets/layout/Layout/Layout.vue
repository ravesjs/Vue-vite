<template>
  <header>
    <nav>
      <ul>
        <router-link to="/">
          <li>
            <img :src="burger" />
          </li>
        </router-link>
      </ul>
    </nav>
  </header>
  <div class="container">
    <main>
			<h1>Menu</h1>
      <slot></slot>
    </main>
  </div>
  <footer></footer>
</template>

<script setup lang="ts">
import burger from '@/shared/assets/icons/icon.png'
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: gray;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  width: 100%;
  background-color: #f5e2ba;
  margin-top: 70px;
}
.container > main {
  width: 60%;
  height: 90%;
  background-color: #ffffff;
  border-radius: 7px;
  text-align: center;
}
img {
  width: 55px;
}
li {
  list-style: none;
}
h1 {
	text-align: center;
}
</style>

<template>
  <div class="starbox">
    <div>数学高手 哈哈!!!!</div>

    <img v-for="item in [1,2,3,4,5,6] " :key="item" :src=" require(`../assets/math${item}.jpg`)" />
  </div>
</template>


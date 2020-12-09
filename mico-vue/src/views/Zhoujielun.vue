<template>
  <div class="starbox">
    <div> -----周杰伦 哈哈!!!!</div>

    <img v-for="item in [1,2,3,4,5,6] " :key="item" :src=" require(`../assets/zjl${item}.jpg`)" />
  </div>
</template>

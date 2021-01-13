<template>
  <div id="app">
    <div class="container">
      <titre titre="Tempest's Family"/>
      <navigation/>
    </div>
    <br>
    <news title="Patch V5" content="New's Content"/>
    <div id="discord"></div>
    <discord/>
    <h1 class="doc">Documentation</h1>
    <documentation/>
  </div>
</template>

<script>
import navigation from '@/components/navigation.vue';
import titre from '@/components/titre.vue';
import discord from '@/components/discord';
import news from '@/components/news';
import documentation from "@/components/documentation";

export default {
  name: 'App',
  components: {
    navigation,
    titre,
    discord,
    news,
    documentation
  }
}
</script>

<style>
body {
  background-color: #111;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar {
  display: none;
}

#app {
  text-align: center;
  color: white;
}

#app .doc {
  color: deepskyblue;
  font-size: 50px;
  margin-top: 500px;
}
</style>

<template>
  <div id="app">
    <div class="container">
      <titre titre="Tempest's Family"/>
      <navigation/>
    </div>
    <br>
    <news titre="Patch V5" content="New's Content"/>
    <div id="discord"></div>
    <discord/>
    <div id="doc"><h1 class="doc">Documentation</h1></div>
    <documentation/>
    <div id="folio"></div>
    <descriptionproject/>
    <folio/>
    <div id="contact"></div>
    <contact/>
  </div>
</template>

<script>
import navigation from '@/components/navigation.vue';
import titre from '@/components/titre.vue';
import discord from '@/components/discord';
import news from '@/components/news';
import documentation from "@/components/documentation";
import folio from "@/components/folio";
import Descriptionproject from "@/components/descriptionproject";
import Contact from "@/components/contact";


export default {
  name: 'App',
  components: {
    Contact,
    Descriptionproject,
    navigation,
    titre,
    discord,
    news,
    documentation,
    folio
  }
}
</script>

<style>
@font-face {
  font-family: "Baby_School";
  src: url(./assets/font/BabySchoolItalic.ttf);
}
body {
  background-color: #303030;
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
  font-family: Baby_School, serif;
  color: deepskyblue;
  font-size: 50px;
  margin-top: 300px;
}
</style>

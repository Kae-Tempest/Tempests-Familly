<template>
  <div id="app">
    <div class="container">
    <navigation/>
    </div>
    <br>
    <news titre="Patch V5" content="New's Content"/>
    <div id="discord"></div>
    <discord/>
    <div id="game"></div>
    <game/>
    <div id="doc"><h1 class="doc">Documentation</h1></div>
    <documentation/>
    <div id="folio"></div>
    <folio/>
    <div id="contact"></div>
    <contact/>
  </div>
</template>

<script>
import navigation from '@/components/navigation.vue';
import discord from '@/components/discord';
import news from '@/components/news';
import documentation from "@/components/documentation";
import folio from "@/components/folio";
import Contact from "@/components/contact";
import game from "@/components/game";

export default {
  components: {
    Contact,
    navigation,
    discord,
    news,
    documentation,
    folio,
    game,
  }
}
</script>

<style>

</style>
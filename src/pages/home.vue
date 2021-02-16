<template>
  <div id="app">
    <div class="container">
    <navigation/>
    </div>
    <br>
    <news titre="Patch V6" content="New's Content"/>
    <div id="discord"></div>
    <discord/>
    <div id="doc"><h2 class="doc">Documentation</h2></div>
    <documentation/>
    <div id="folio"></div>
    <folio/>
    <div id="contact"></div>
    <contact/>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
import navigation from '@/components/navigation.vue';
import discord from '@/components/discord';
import news from '@/components/news';
import documentation from "@/components/documentation";
import folio from "@/components/folio";
import Contact from "@/components/contact";

export default {
  components: {
    Contact,
    navigation,
    discord,
    news,
    documentation,
    folio,
  },
  data() {
    return {
      authenticaded: false,
      mockAccount: {
        logemail: "katsuhiko.tempest@gmail.com",
        logpassword: "root"
      }
    }
  }
}

</script>

<style scoped>
#doc h2{
  margin-top: 200px;
}
</style>
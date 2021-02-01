<template>
  <div id="app">
      <Oauth/>
    <div class="container">
      <titre titre="Tempest's Family"/>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import titre from '@/components/titre.vue';
import Oauth from './components/Oauth.vue';


export default {
  name: 'App',
  components: {
    titre,
    Oauth
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
  margin-top: 50px;
}
</style>

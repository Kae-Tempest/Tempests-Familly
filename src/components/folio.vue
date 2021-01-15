<template>
  <div id="folio">
    <a v-for="(link,index) in links" :key="'link_' + index" :href="link.href" target="_blank"><img :src="link.src" :alt="link.alt"/></a>
  </div>
</template>

<script>
export default {
  name: 'folio',
  props: {
    desc: String
  },
  data() {
    return {
      links: [
        {
          'src': "@../../assets/img/DaiKenjaProject.png",
          'alt': 'Dai Kenja Projet',
          'href': 'https://github.com/Kae-Tempest/daikenja',
        },
        {
          'src': "@../..//assets/img/tempestfamilyproject.png",
          'alt': 'Tempest\'s Family VueJs project',
          'href': 'https://github.com/Kae-Tempest/Tempests-Familly',
        }
      ]
    }
  }
}
</script>

<style scoped>
a {
  padding: 20px;
}
</style>
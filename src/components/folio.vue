<template>
  <div id="folio">
    <a v-for="(link,index) in links" :key="'link_' + index" :href="link.href"><img :src="link.src" :alt="link.alt"/></a>
  </div>
</template>

<script>
//import descriptionDaiKenja from '@/components/descriptionDaiKenja'

export default {
  name: 'folio',
  props: {
    desc: String
  },
  data() {
    return {
      links: [
        {'src': "./assets/img/DaiKenjaProject.png", 'alt': 'Dai Kenja Projet', 'href': '#'},
        {'src': "./assets/img/tempestfamilyproject.png", 'alt': 'Tempest\'s Family VueJs project', 'href': '#'}
      ]
    }
  }
}
</script>

<style scoped>
#folio {
  margin-top: 50px;
}

a {
  padding: 10px;
}
</style>
<template>
  <div id="folio">
    <a v-for="(link,index) in links" :key="'link_' + index" :href="link.href" target="_blank"><img :src="link.src" :alt="link.alt"/></a>
  </div>
</template>

<script>
import DaiKenjaProject from '@/assets/img/DaiKenjaProject.png'
import tempestfamilyproject from '@/assets/img/tempestfamilyproject.png'
import DaikenjaIRC from '@/assets/img/DaikenjaIRC.png'

export default {
  name: 'folio',
  props: {
    desc: String
  },
  data() {
    return {
      links: [
        {
          'src': DaiKenjaProject,
          'alt': 'Dai Kenja Projet',
          'href': 'https://github.com/Kae-Tempest/daikenja',
        },
        {
          'src': tempestfamilyproject,
          'alt': 'Tempest\'s Family VueJs project',
          'href': 'https://github.com/Kae-Tempest/Tempests-Familly',
        },
        {
          'src': DaikenjaIRC,
          'alt': 'Dai Kenja Projet on Twitch',
          'href': 'https://github.com/Kae-Tempest/DaiKenjaIRC'
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
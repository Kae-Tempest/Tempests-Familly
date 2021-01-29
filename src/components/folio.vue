<template>
  <div id="folio">
    <a v-for="(link,index) in links" :key="'link_' + index" :href="link.href" target="_blank"><img :src="link.src" :alt="link.alt"/></a>
  </div>
</template>

<script>
import DaiKenjaProject from '@/assets/img/DaiKenjaProject.png'
import tempestfamilyproject from '@/assets/img/tempestfamilyproject.png'
import DaikenjaIRC from '@/assets/img/DaikenjaIRC.png'
import DaiKenjaElectron from '@/assets/img/DaiKenjaElectron.png'

export default {
  name: 'folio',
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
        },
        {
          'src': DaiKenjaElectron,
          'alt': 'Dai Kenja Electron project',
          'href': 'https://github.com/Kae-Tempest/Dai-Kenja-Electron'
        }
      ]
    }
  }
}
</script>

<style scoped>
#folio{
  margin-top: 50px;
}
a {
  display: inline-block;
  padding: 10px;
}
</style>
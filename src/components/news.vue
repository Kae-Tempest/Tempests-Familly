<template>
  <div>
    <div class="container">
    <p class="title">{{ titre }}</p>
      <div class="container-content">
      <p><b><patchnote/></b></p>
      </div>
    </div>
  </div>
</template>

<script>
import patchnote from "@/components/patchnote";

export default {
  name: 'news',
  components: {
    patchnote
  },
  props: {
    titre: String,
    content: String
  }
}
</script>
<style scoped>
@font-face {
  font-family: "Baby_School";
  src: url('~@/assets/font/BabySchoolItalic.ttf');
}
.title{
  font-family: "Baby_School";
  font-size: 35px;
  color: aqua;
  text-align: center;
}
.container{
  border-radius: 10px;
  border: 3px solid red;
}
p{
  font-size: 20px;
  text-align: left;
  padding: 5px 10px;
}
</style>
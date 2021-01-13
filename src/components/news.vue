<template>
  <div>
    <div class="container">
    <h1>{{ title }}</h1>
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
    title: String,
    content: String
  }
}
</script>

<style scoped>
h1{
  font-size: 35px;
  color: aqua;
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
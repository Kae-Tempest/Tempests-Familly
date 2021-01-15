<template>
  <div id="contact">
    <a href="mailto:katsuhiko.tempest@gmail.com"><img class="gmail" src="@/assets/img/gmail.png" alt="Gmail Icon"/></a>
    <a :href="link" target="_blank"><img class="git" src="@/assets/img/github.png" alt="GitHub Icon"/></a>
  </div>
</template>

<script>
export default {
  name: 'contact',
  props: {
    link: String
  }
}
</script>

<style scoped>
#contact{
  margin-top: 10px;
  margin-bottom: 10px;
}
#contact p{
  display: inline-block;
  padding: 0 8em;
}
#contact a{
  text-decoration: none;
  color: white;
  padding: 0 50px;
}
#contact a:hover{
  text-decoration: none;
  color: red;
}
#contact p{
}
.gmail{
  width: 3%;
}
.git{
  width: 3%;
}
</style>
<template>
  <div id="contact">
    <p>Email: {{ mail }}</p>
    <p>GitHub: <a :href="link" target="_blank">{{ link }}</a></p>
  </div>
</template>

<script>
export default {
  name: 'contact',
  props: {
    mail: String,
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
}
#contact a:hover{
  text-decoration: none;
  color: red;
}
</style>
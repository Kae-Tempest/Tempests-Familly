<template>
<div id="game">
  <div class="chat">
<p>futur chat</p>
  </div>
  <label>
    <input type="text" placeholder="Entrée du texte">
  </label>
</div>
</template>

<script>
export default {
  name: "game"
}
</script>

<style scoped>
#game{
  margin-top: 250px;
  display: block;
}
.chat{
  width: 800px;
  height: 500px;
  border: 3px solid red;
  margin-left: 30%;
  margin-bottom: 10px;
}
input{
  width: 500px;
  height: 20px;
  border-radius: 10px;
}
</style>
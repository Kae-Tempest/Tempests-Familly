<template>
  <div id="game">
    <div class="chat">
      <p>futur chat</p>
      <p>va falloir une bdd pour stocké le chat</p>
      <p>et heuuu puis s'occuper d'integrer le RPG dans la page web en back end pour qu'il interagise avec l'input et que ca ressorte dans le chat</p>
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
#game {
  margin-top: 250px;
  display: block;
}

.chat {
  width: 800px;
  height: 500px;
  border: 3px solid red;
  margin-left: 30%;
  margin-bottom: 10px;
}

input {
  width: 500px;
  height: 20px;
  border-radius: 10px;
}
</style>
<template>
  <div id="game">
    <div class="chat">
    </div>
    <label>
      <input id="inputchat" v-on:keyup.enter="sendMessage()"  type="text" placeholder="Entrée du texte">
    </label>
  </div>
</template>

<script>
export default {
  name: "game",
  data: function (){
    return {
      connection: null
    }
  },
  methods: {
    sendMessage: function() {
      let input = document.getElementById("inputchat").value;
      console.log(input)
      const clear = document.getElementById("inputchat").value = ''
      console.log(clear)
    }
  },
  created: function () {
    console.log("Starting connection to WebSocket Server");
    this.connection = new WebSocket("wws://echo.websocket.org");

    this.connection.onmessage = function (event){
      console.log(event);
    }

    this.connection.onopen = function (event) {
      console.log(event);
      console.log("Successfully connected to the echo websocket server...")
    }
  }
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
  border-radius: 10px;
}

input {
  width: 500px;
  height: 20px;
  border-radius: 10px;
}
</style>
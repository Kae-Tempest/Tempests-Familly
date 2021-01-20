<template>
  <div id="game">
    <div class="chat">
      <p id="ChatContainer"></p>
    </div>
    <label>
      <input id="inputChat" v-on:keyup.enter="sendMessage()"  type="text" placeholder="Entrée du texte">
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
      let msg= '';
      let input = document.getElementById("inputChat").value;
      const clear = document.getElementById("inputChat").value = ''
      console.log(clear)
      msg += input + '\n'
      document.getElementById("ChatContainer").innerHTML = msg ;
    }
  }
  /*,
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
  }*/
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
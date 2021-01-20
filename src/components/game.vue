<template>
  <div>
    <div class="chat">
      <ul>
        <li v-for="message in messages" :key="message.id">{{ message.value }}</li>
      </ul>
    </div>
    <form @submit.prevent="sendMessage">
        <input v-model="messageInput" @keyup.enter="sendMessage" type="text" placeholder="Entrée du texte">
    </form>
  </div>
</template>

<script>
let id = 0;
export default {
  name: "game",
  data() {
    return {
      connection: null,
      messageInput: '',
      messages: [],
    }
  },
  methods: {
    sendMessage() {
       this.messages.push({ id: id++, value: this.messageInput })
       this.messageInput = ''
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
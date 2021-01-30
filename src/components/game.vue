<template>
  <div class="gamediv">
    <div class="chat" v-chat-scroll="{smooth: true, notSmoothOnInit: true}">
        <div class="message" v-for="message in messages" :key="message.id">{{ message.value }}</div>
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

  //TODO WEBSOCKET CONNECTION 
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
.chat {
  width: 1500px;
  height: 500px;
  border: 5px solid red;
  margin-top: 15px;
  margin-left: 10%;
  margin-bottom: 10px;
  border-radius: 10px;
  overflow: auto;
}
.message {
  text-align: left;
  padding-left: 10px;
  margin-top: px;
  max-width: 1500px;
  word-break: break-word;
}
.chat::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,1);
	border-radius: 10px;
	background-color: #303030;
}

.chat::-webkit-scrollbar
{
	width: 12px;
	background-color: #303030;
}

.chat::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,1);
	background-color: #AA0000;
}

input {
  width: 500px;
  height: 20px;
  border-radius: 10px;
  margin-left: 30px;
}
</style>
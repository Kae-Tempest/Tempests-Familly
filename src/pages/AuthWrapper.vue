<template>
  <div id="AW">
    <form class="login">
      <h2>CONNEXION</h2>
      <input v-model="input.logemail" name="logemail" placeholder="Email" type="email">
      <input v-model="input.logpassword" name="logpassword" placeholder="Password" type="password">
      <router-link v-on:click="login()" tag="button" to="/" >CONNEXION</router-link>
    </form>
    <hr>
   <form class="signin">
      <h2>SIGN IN</h2>
      <input v-model="input.pseudo" name="Pseudo" placeholder="Pseudo" type="text">
      <input v-model="input.signemail" name="signemail" placeholder="Email" type="email">
      <input v-model="input.signpassword" name="signpassword" placeholder="Password" type="password">
      <router-link v-on:click="signin()" tag="button" to="/" >SIGN IN</router-link>
    </form>
  </div>
</template>

<style scoped>
#AW{
  display: flex;
  justify-content: center;
  align-items: center;
}
form{
  display: grid;
  row-gap: 10px;
}
h2{
  font-family: 'Baby_school';
  font-size: 25px;
  padding: 10px 0;
}
hr{ 
    margin: 0 10%;
    border: none;
    border-left: 3px solid hsla(200, 10%, 100%,100);
    height: 50vh;
    width: 1px;       
}
button{
    text-align: center;
    border-radius: 10px;
    color: white;
    padding: 3px;
    background-color: #101010;
    border: 0;
}
input{
  border-radius: 8px;
  background-color: #101010;
  color: white;
  border: 0;
  padding: 3px;

}
</style>>

<script>
export default{
  name: 'Log in/Sing in',
  data() {
    return {
      input: {
        logemail: "",
        logpassword: "",
        pseudo: "",
        signemail: "",
        signpassword: ""        
      }
    }
  },
  methods: {
    login() {
      if(this.input.logemail !== "" && this.input.logpassword !== "") {
        if(this.input.logemail == this.$parent.mockAccount.email && this.input.logpassword == this.$parent.mockAccount.password) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "/"});
        } else {
          alert("Email ou password inccorecte");
        }
      } else {
        alert("il faut un email ou un password pour se connecter !!")
      }
    },
    signin() {
      if(this.input.pseudo !== "" && this.input.signemail !== "" && this.input.signpassword !== "") {
        //requete SQL INSERT TO
        this.$router.replace({ name: "/"});
      } else {
        alert("Cet utilisateur existe déja !");
      }
    }
  }
}
</script>
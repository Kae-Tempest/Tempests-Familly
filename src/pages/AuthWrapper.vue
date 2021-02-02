<template>
  <div id="AW">
    <form class="login">
      <h2>CONNEXION</h2>
      <input placeholder="Email" type="email">
      <input placeholder="Password" type="password">
      <router-link tag="button" to="/" >CONNEXION</router-link>
    </form>
    <hr>
    <form class="signin">
      <h2>SIGN IN</h2>
      <input placeholder="Pseudo" type="text">
      <input placeholder="Email" type="email">
      <input placeholder="Password" type="password">
      <router-link tag="button" to="/" >SIGN IN</router-link>
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

</script>
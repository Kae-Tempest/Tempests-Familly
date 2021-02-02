<template>
  <div id="AW">
    <form class="login">
      <h2>CONNEXION</h2>
      <div class="logincontainer">
        <div>
      <labael>Email :</labael>
      <input type="email">
        </div>
        <div>
      <label>Password :</label>
      <input type="password">
        </div>
      </div>
      <button type="submit">CONNEXION</button>
    </form>
    
    <form class="signin">
      <h2>SIGN IN</h2>
      <div class="signincontainer">
        <div>
      <label>Pseudo</label>
      <input type="text">
        </div>
      <div>
      <labael>Email :</labael>
      <input type="email">
      </div>
      <div>
      <label>Password :</label>
      <input type="password">
      </div>
      </div>
      <button type="submit">SIGN</button>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#AW{
  display: flex;
}
.login{
  margin-left: 25% ;
  margin-top: 10%;
}
.logincontainer{
  padding-bottom: 10px;
  text-align: right;
}
.signin{
  margin-top: 10%;
  margin-left: 20%;
}
.signincontainer{
  padding-bottom: 10px;
  text-align: right;
}
h2{
  font-family: 'Baby_school';
  font-size: 25px;
  padding: 10px 0;
}
</style>>
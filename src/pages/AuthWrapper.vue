<template>
  <div id="AW">
    <a href="https://discord.com/api/oauth2/authorize?client_id=774574072054284328&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2F%23%2F&response_type=code&scope=connections">
    <button>Connect with Discord</button>
    </a>
  </div>
</template>

<style scoped>
button{
    margin-top: 250px;
    text-align: center;
    border-radius: 10px;
    color: white;
    background-color: #101010;
    border: 0;
    font-size: 30px;
}
</style>

<script>
export default{
  name: 'Log in',
}
</script>
<template>
<div id="Oauth">
    <div class="divlog">
        <router-link class="button1" tag="button" to="/" >Home</router-link>
        <router-link class="button2" tag="button" to="/AuthWrapper">Log in/Sign In</router-link>
    </div>
</div>
</template>

<script>
</script>

<style scoped>
.divlog button {
    position: absolute;
    display: inline;
    text-align: center;
    width: 100px;
    border-radius: 10px;
    color: white;
    background-color: #101010;
    border: 0;
}
.button1{
    top: 5px;
    right: 105px;
    margin-right: 5px;
}
.button2{
    top: 5px;
    right: 5px;
}
</style>
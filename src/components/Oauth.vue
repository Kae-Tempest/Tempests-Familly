<template>
<div id="Oauth">
    <div class="divlog">
        <router-link class="button1" tag="button" to="/" >Home</router-link>
        <router-link class="button2" tag="button" to="/Game">Game</router-link>
        <router-link class="button3" tag="button" to="/AuthWrapper">Log in</router-link>
    </div>
</div>
</template>

<script>
export default {
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            }
        }
}
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
    right: 210px;
    margin-right: 5px;
}
.button2{
    top: 5px;
    right: 105px;
    margin-right: 5px;
}
.button3{
    top: 5px;
    right: 5px;
}
</style>
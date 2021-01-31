<template>
<div id="Oauth">
    <form @submit.prevent="submit()">
        <div class="divlog">
        <button class="login">Log in/Sign In</button>
        </div>
    </form>
</div>
</template>

<script>
export default {
    data(){
        return {
                email: "",
                password: ""
            };
        },
    methods: {
        submit() {
            this.$emit("submit",{
                email: this.email,
                password: this.password
            });
            this.email = '',
            this.password = ''
        }
    }
};
</script>

<style scoped>
form {
    display: inline;
    text-align: right;
    top: 5px;
    right: 5px;
}
.divlog{
    padding-top: 5px;
}
.divlog button {
    width: 100px;
    border-radius: 10px;
    height: 18px;
    color: white;
    background-color: #101010;
    border: 0;
}
</style>
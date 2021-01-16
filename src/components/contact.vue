<template>
  <div id="contact">
    <a href="mailto:katsuhiko.tempest@gmail.com"><img class="gmail" src="@/assets/img/gmail.png" alt="Gmail Icon"/></a>
    <a href="https://www.twitch.tv/katsuhiiko"><img class="twitch" src="@/assets/img/social-twitch-circle-512.png" alt="Twitch Icon"/></a>
    <a href="https://github.com/Kae-Tempest" target="_blank"><img class="git" src="@/assets/img/github.png" alt="GitHub Icon"/></a>
  </div>
</template>

<script>
export default {
  name: 'contact',
}
</script>

<style scoped>
#contact {
  margin-top: 10px;
  margin-bottom: 10px;
}

#contact p {
  display: inline-block;
  padding: 0 8em;
}

#contact a {
  text-decoration: none;
  color: white;
  padding: 0 50px;
}

#contact a:hover {
  text-decoration: none;
  color: red;
}

#contact p {
}

.gmail {
  width: 3%;
}

.git {
  width: 3%;
}

.twitch{
  width: 3%;
}
</style>
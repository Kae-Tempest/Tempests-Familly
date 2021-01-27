<template>
  <div id="contact">
    <a href="mailto:katsuhiko.tempest@gmail.com"><img class="image" src="@/assets/img/gmail.png" alt="Gmail Icon"/></a>
    <a href="https://www.twitch.tv/katsuhiiko" target="_blank"><img class="image" src="@/assets/img/social-twitch-circle-512.png" alt="Twitch Icon"/></a>
    <a href="https://github.com/Kae-Tempest" target="_blank"><img class="image" src="@/assets/img/github.png" alt="GitHub Icon"/></a>
    <a href="https://discord.gg/V9t5k5z" target="_blank"><img class="image" src="@/assets/img/discord icon.png" alt="Discord icon"></a>
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

.image {
  width: 3%;
}
</style>
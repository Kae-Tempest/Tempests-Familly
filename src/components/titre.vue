<template>
  <h1 class="titre">{{ titre }}</h1>
</template>

<script>
export default {
  name: 'titre',
  props: {
    titre: String
  }
}
</script>
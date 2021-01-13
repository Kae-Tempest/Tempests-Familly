<template>
  <h1 class="title">{{ titre }}</h1>
</template>

<script>
export default {
  name: 'title',
  props: {
    titre: String
  }
}
</script>
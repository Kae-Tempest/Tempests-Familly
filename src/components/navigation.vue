<template>
  <div>
    <nav class="navbar">
      <ul>
        <li v-for="(link,index) in links" :key="'link_' + index"><a :href="link.href">{{ link.name }}</a></li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'navigationn',
  data() {
    return {
      links: [
        {'name': 'Discord', 'href': '#discord'},
        {'name': 'Documentation', 'href': '#doc'},
        {'name': 'Folio', 'href': '#folio'},
        {'name': 'Contact', 'href': '#contact'}
      ]
    }
  }
  }
</script>
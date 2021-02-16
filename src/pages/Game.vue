<template>
    <div>
        <div id="game"></div>
        <game/>
        <div id="doc"><h2 class="doc">Documentation</h2></div>
        <documentation/>
        <router-view @authenticated="setAuthenticated" />
    </div>
</template>

<script>
import documentation from "@/components/documentation";
import game from "@/components/game";

export default {
components: {
    documentation,
    game
}
}
</script>
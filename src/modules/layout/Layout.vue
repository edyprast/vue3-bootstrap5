<template>
    <header-app />
    <div id="layoutSidenav">
        <side-nav />
        <main-content />
    </div>
</template>

<script>
import Header from '../header/Header.vue'
import Sidenav from '../side-nav/Sidenav.vue'
import MainContent from '../main-content/MainContent.vue'
export default {
    components: {
        'header-app': Header,
        'side-nav': Sidenav,
        'main-content': MainContent
    }
}
</script>
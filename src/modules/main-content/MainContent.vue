<template>
    <div id="layoutSidenav_content">
        <main>
          <router-view/>
        </main>
        <footer-app />
    </div>
</template>

<script>
import Footer from '../footer/Footer.vue'
export default {
    components: { 'footer-app': Footer }
}
</script>
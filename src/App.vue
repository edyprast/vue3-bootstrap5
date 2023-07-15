<template>
  <layout-app />
</template>


<script>
import Layout from './modules/layout/Layout.vue'
export default {

  components: { 'layout-app': Layout },

  mounted() {

    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
      // Uncomment Below to persist sidebar toggle between refreshes
      // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
      //     document.body.classList.toggle('sb-sidenav-toggled');
      // }
      sidebarToggle.addEventListener('click', event => {
        event.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
      });
    }

    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
      new simpleDatatables.DataTable(datatablesSimple);
    }

  }
}
</script>

<style scoped></style>
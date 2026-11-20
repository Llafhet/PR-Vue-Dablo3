<script setup>
    import HeaderBar from '../components/HeaderBar/Index.vue'
    import FooterBar from '../components/Footer/Index.vue'
</script>

<template>
  <div class="container">
    <HeaderBar/>

    <router-view/>

    <FooterBar />
  </div>
</template>
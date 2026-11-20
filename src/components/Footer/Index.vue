<script setup>
    import MadeByFoot from './MadeByFoot.vue'
    import PoweredByFoot from './PoweredByFoot.vue'
    import FootLinks from './FootLinks.vue'

    const icons = [
      {
        classes: ['fab', 'vuejs'],
        color: '#41B883',
        href: 'https://vuejs.org/'
      },
      {
        classes: ['fab', 'github'],
        color: '#ffffff',
        href: 'https://github.com/'
      },
      {
        classes: ['fab', 'html5'],
        color: '#E34F26',
        href: 'https://developer.mozilla.org/docs/Web/HTML'
      },
      {
        classes: ['fab', 'css3-alt'],
        color: '#663399',
        href: 'https://developer.mozilla.org/docs/Web/CSS'
      },
      {
        classes: ['fab', 'js'],
        color: '#F7DF1E',
        href: 'https://developer.mozilla.org/docs/Web/JavaScript'
      },
      {
        classes: ['fab', 'tailwind-css'],
        color: '#38BDF8',
        href: 'https://tailwindcss.com/'
      },
      {
        classes: ['fas', 'bolt'],
        color: '#646CFF',
        href: 'https://vitejs.dev/'
      },
      {
        classes: ['fas', 'layer-group'],
        color: '#FFD859',
        href: 'https://pinia.vuejs.org/'
      },
      {
        classes: ['fas', 'network-wired'],
        color: '#5A29E4',
        href: 'https://axios-http.com/'
      },
      {
        classes: ['fab', 'font-awesome'],
        color: '#528DD7',
        href: 'https://fontawesome.com/'
      },
      
    ]
    
</script>

<template>
  <footer class="footer-bar mt-5">
    <PoweredByFoot :icons="icons"/>

    <hr class="my-5">

    <div class="grid items-center gap-5 sm:grid-cols-2">
      <div class="px-4">
        <FootLinks/>
      </div>
      <div class="">
        <MadeByFoot/>
      </div>
    </div>

  </footer>
</template>

<style scoped>

</style>
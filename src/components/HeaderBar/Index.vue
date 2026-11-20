<script setup>
  const title = import.meta.env.VITE_APP_TITLE
</script>

<template>
  <div class="header-bar">
    <div class="navigation-bar">
      <nav class="bg-neutral-900 px-4 py-2">
          <RouterLink
            to="/"
            class="rune-link mx-auto flex w-fit items-center justify-center border-b border-transparent px-3 py-2 text-sm font-bold uppercase tracking-[0.16em] text-[#a99a78] transition duration-200 hover:border-[#c9a25d] hover:text-[#f0d79a]"
          >
            <img src="@/assets/img/diablo-iii.svg" alt="D3" width="30" class="block shrink-0">
            <span class="font-diablo ml-2 flex items-center justify-center text-center leading-none">{{ title }}</span>
          </RouterLink>
      </nav>
    </div>

  </div>
</template>

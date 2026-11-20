<script setup>
// Este componente muestra el estado de carga durante la solicitud OAuth.
</script>

<template>
  <div
    class="fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 bg-[#080708]/90 backdrop-blur-sm"
    role="status"
    aria-live="polite"
    aria-label="Cargando token de acceso"
  >
    <div
      class="h-16 w-16 animate-spin rounded-full border-[3px] border-[#5f4930]/60 border-t-[#d3a85d] shadow-[0_0_28px_rgba(137,31,23,0.8)]"
      aria-hidden="true"
    />
    <p class="text-sm font-bold uppercase tracking-[0.25em] text-[#cbb179]">Invocando acceso</p>
  </div>
</template>
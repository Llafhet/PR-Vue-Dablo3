<script setup>
// Permite mantener la referencia reactiva a los datos del store de Pinia.
import { storeToRefs } from 'pinia'
// Proporciona el guardia para ejecutar una acción antes de abandonar esta ruta.
import { onBeforeRouteLeave } from 'vue-router'
// Composable que ofrece la función para actualizar o limpiar el error guardado.
import { useSetError } from '@/mixins/setError'
// Store compartido que contiene los datos del error actual.
import { useError } from '@/store/modules/error.js'

// Conecta esta vista al store de errores.
const errorStore = useError()
// Expone el error como referencia reactiva para usarlo en el template.
const { error: err } = storeToRefs(errorStore)
// Obtiene la función que cambia el error en el store.
const { setApiErr } = useSetError()

// Limpia el error al salir de la vista para que no aparezca en la siguiente navegación.
onBeforeRouteLeave(() => {
  setApiErr(null)
})
</script>

<template>
  <!-- Contenedor principal centrado; las clases Tailwind controlan ancho y espaciado. -->
  <main class="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
    <hr class="mb-8 border-slate-300">

    <!-- Muestra los detalles si el store contiene un error. -->
    <section
      v-if="err"
      class="rounded-xl border border-red-200 bg-white p-6 shadow-sm sm:p-8"
      aria-live="polite"
    >
      <!-- Título del error; el código HTTP se muestra solo si está disponible. -->
      <h1 class="mb-6 text-3xl font-bold text-red-800">
        Error<span v-if="err.status"> {{ err.status }}</span>
      </h1>

      <!-- Lista los parámetros de ruta asociados a la solicitud que falló. -->
      <div v-if="err.routeParams" class="mb-6">
        <h2 class="mb-3 text-lg font-semibold text-slate-900">Query Params</h2>
        <ul class="space-y-2">
          <li
            v-for="(val, key) in err.routeParams"
            :key="key"
            class="break-words text-slate-700"
          >
            <span class="font-medium">{{ key.toUpperCase() }}:</span> {{ val }}
          </li>
        </ul>
      </div>

      <!-- Presenta el mensaje principal del error cuando existe. -->
      <p v-if="err.message" class="mb-6 break-words leading-7 text-slate-700">
        {{ err.message }}
      </p>

      <!-- Muestra detalles adicionales que haya devuelto la API. -->
      <div v-if="err.data">
        <h2 class="mb-3 text-lg font-semibold text-slate-900">Additional details</h2>
        <ul class="space-y-2">
          <li
            v-for="(val, key) in err.data"
            :key="key"
            class="break-words text-slate-700"
          >
            <span class="font-medium">{{ key.toUpperCase() }}:</span> {{ val }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Estado alternativo para cuando se visita la página sin un error guardado. -->
    <section v-else class="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
      <h1 class="mb-3 text-3xl font-bold text-slate-900">Error Page</h1>
      <p class="text-lg leading-7 text-slate-600">What are you doing here? 🤔</p>
    </section>

    <!-- Separador visual al final del contenido. -->
    <hr class="mt-8 border-slate-300">
  </main>
</template>
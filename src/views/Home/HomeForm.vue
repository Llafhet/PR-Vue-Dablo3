<script setup>
    // Lista de regiones disponibles para el selector.
    import { regions as regionsList  } from '@/utils/regions.js'
    // reactive crea datos reactivos y computed convierte datos para mostrarlos.
    import { computed, reactive } from 'vue'
    // Permite navegar a otra vista desde el script.
    import { useRouter } from 'vue-router'

    // Instancia del router de la aplicación.
    const router = useRouter()

    // Datos que el usuario modifica mediante el formulario.
    const form = reactive({
        battleTag: '',
        region: 'eu'
    })

    // Convierte cada región en una opción de texto para el elemento select.
    const regionOptions = computed(() =>{
        return regionsList.map(region => ({ 
            value: region, 
            text: region.toUpperCase() }))
    })

    // Se ejecuta cuando el formulario es enviado.
    function onSubmit(){
        const { region, battleTag } = form

        // Navega a la vista Profile reemplazando # por -, ya que el router usa
        // el BattleTag como parámetro de la ruta.
        router.push({ 
            name: 'Profile',
            params: {
                region, 
                battleTag: battleTag.replace('#', '-') } })
    }

</script>

<template>
  <!-- Contenedor principal centrado y limitado al ancho en pantallas medianas. -->
  <div class="mx-auto my-5 w-full px-4 md:max-w-3xl">
    <!-- prevent evita que el formulario recargue la página al enviarse. -->
    <form class="space-y-6" @submit.prevent="onSubmit">
      <div>
        <!-- Etiqueta asociada al campo mediante el atributo for. -->
        <label for="input-text" class="mb-2 block font-semibold text-[#d8c38f]">
          BattleTag:
        </label>
        <input
          v-focus
          id="input-text"
          v-model="form.battleTag"
          type="text"
          required
          placeholder="BattleTag"
          class="w-full rounded border border-[#6b6251] bg-black/60 px-4 py-3 text-white outline-none transition focus:border-[#d8c38f] focus:ring-2 focus:ring-[#d8c38f]/30"
        >
        <!-- Texto informativo sobre el formato esperado del BattleTag. -->
        <p class="mt-2 text-sm text-gray-400">
          Format: YourProfile#1234
        </p>
      </div>

      <div>
        <!-- Campo que guarda la región seleccionada en form.region. -->
        <label for="input-region" class="mb-2 block font-semibold text-[#d8c38f]">
          Region:
        </label>
        <select
          id="input-region"
          v-model="form.region"
          required
          class="w-full rounded border border-[#6b6251] bg-black/60 px-4 py-3 text-white outline-none transition focus:border-[#d8c38f] focus:ring-2 focus:ring-[#d8c38f]/30"
        >
          <!-- v-for genera una opción y key permite identificar cada una. -->
          <option
            v-for="option in regionOptions"
            :key="option.value"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
      </div>

      <div class="flex justify-end pt-5">
        <!-- Envío: activa el evento submit del formulario. -->
        <button
          type="submit"
          class="rounded bg-[#8b1e1e] px-6 py-3 font-semibold text-white shadow transition hover:bg-[#a62b25]"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
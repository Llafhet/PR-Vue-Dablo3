import { defineStore } from 'pinia'

// Crea el store compartido que controla si se muestra el indicador de carga.
export const useLoadingStore = defineStore('loading', {
  state: () => ({
    // false oculta el loading y true lo muestra.
    isLoading: false
  }),
  actions: {
    // Recibe el nuevo estado del loading y lo guarda para toda la aplicacion.
    SET_LOADING(payload) {
      this.isLoading = payload
    }
  }
})
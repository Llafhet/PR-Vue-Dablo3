import { defineStore } from 'pinia'
import * as oauth from '@/api/oauth.js'
// Importa el store encargado de mostrar u ocultar el indicador de carga.
import { useLoadingStore } from './loading.js'

// Define un store compartido para administrar el token OAuth.
export const useOauthStore = defineStore('oauth', {
  // Estado privado del store: aquí se guarda el token de acceso.
  state: () => ({
    accessToken: null
  }),
  actions: {
    // Actualiza el token, usando null cuando no existe un valor valido.
    setAccessToken(payload) {
      this.accessToken = payload
    },
    async getToken() {
      // Activa el spinner mientras la API procesa la solicitud.
      // useLoadingStore() crea o obtiene la instancia compartida de Pinia.
      const loadingStore = useLoadingStore()
      loadingStore.SET_LOADING(true)

      try {
        // Espera la respuesta HTTP y extrae el token de la propiedad data.
        const { data } = await oauth.getToken()
        this.setAccessToken(data.access_token)
      } catch (error) {
        // Si falla la solicitud, elimina cualquier token anterior.
        this.setAccessToken(null)
        console.log('Error al obtener el token', error)
      } finally {
        // Oculta el spinner al terminar la solicitud, con éxito o error.
        loadingStore.SET_LOADING(false)
        // Se ejecuta siempre, tanto si la solicitud fue correcta como si fallo.
        console.log('Proceso de obtención de token finalizado')
      }
    }
  }
})
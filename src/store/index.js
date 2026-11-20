// Exporta el store OAuth para poder importarlo desde un punto central.
export { useOauthStore } from './modules/oauth.js'
// Exporta el store de carga desde el mismo punto central de la carpeta store.
export { useLoadingStore } from './modules/loading.js'
// Exporta el store de error desde el mismo punto central de la carpeta store.
export { useError } from './modules/error.js'
import axios from 'axios'
import { locales } from '@/utils/regions'
import { useOauthStore } from '@/store/modules/oauth.js'

// API URL
// https://{region}.api.blizzard.com, donde {region} puede ser 'us', 'eu', 'kr' o 'tw'
const protocol = 'https://'
const host = '.api.blizzard.com'
const fakeDatabaseUrl = 'https://d3-api.free.beeceptor.com/data'

function getApiAccount ({region, account}) {
  // Base de datos ficticia usada para probar el proyecto sin token de Blizzard.
  const useFakeDatabase = true

  if (useFakeDatabase) {
    return axios.get(fakeDatabaseUrl)
  }

  // Código original de la API real (comentado al usar la base de datos ficticia).
// Recurso de la API al que queremos acceder
  const resource = `d3/profile/${account}/`
// API URL completa
  const API_URL = `${protocol}${region}${host}/${resource}`
// Locale
  const locale = locales[region]
  const oauthStore = useOauthStore()

// Parámetros:
// - Token de acceso (recuperado desde Vuex)
// // - Locale
  const params = {
    access_token: oauthStore.accessToken,
    locale
  }

// Retornamos el resultado de hacer la llamada a la API, es decir, una promesa
// que controlaremos (éxito / error) desde el componente
  return axios.get(API_URL, { params })
}

function getFakeHeroResponse (heroId) {
  return axios.get(fakeDatabaseUrl).then(response => {
    const hero = response.data.heroes?.find(
      item => String(item.id) === String(heroId)
    )

    if (!hero) {
      throw new Error(`No se encontró el héroe con id ${heroId} en la base ficticia.`)
    }

    return { ...response, data: hero }
  })
}

/**
 * Returns a single hero
 * GET – /d3/profile/{account}/hero/{heroId}
 * @param region {String}
 * @param account {String}
 * @param heroId {String}
 * @returns {Promise}
 */
function getApiHero ({ heroId }) {
  return getFakeHeroResponse(heroId)
}

/**
 * Returns a list of items for the specified hero.
 * GET – /d3/profile/{account}/hero/{heroId}/items
 * @param region {String}
 * @param account {String}
 * @param heroId {String}
 * @returns {Promise}
 */
function getApiDetailedHeroItems ({ heroId }) {
  return getFakeHeroResponse(heroId).then(response => {
    if (!response.data.items) {
      throw new Error(`El héroe con id ${heroId} no tiene objetos en la base ficticia.`)
    }

    return { ...response, data: response.data.items }
  })
}

export{
    getApiHero,
    getApiDetailedHeroItems,
    getApiAccount
}
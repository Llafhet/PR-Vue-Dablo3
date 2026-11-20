
// Navega al detalle de un héroe conservando la región y el BattleTag de la ruta actual.
// heroId identifica al héroe; route y router se reciben desde el componente que llama esta función.
export function goToHero(heroId, route, router) {
  // Recupera los parámetros necesarios para volver a construir la URL del perfil.
  const { region, battleTag } = route.params

  // Busca la ruta con nombre "hero" y le entrega los tres parámetros requeridos por el router.
  return router.push({ name: 'hero', params: { region, battleTag, heroId } })
}
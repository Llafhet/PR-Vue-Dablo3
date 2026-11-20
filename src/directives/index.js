// En Vue 3, vue no exporta un objeto default llamado Vue.
// Las directivas se registran en la instancia de la aplicacion con app.directive(...).
// Se crea la directiva de foco.
export default {
  mounted(element) {
    element.focus()
    // Seleccionar su texto cuando uses el modificador.
    // if (binding.modifiers.select && typeof element.select === 'function') {
    //   element.select()
    // }
  }
}

export const diablo = {
  mounted(element, binding) {
    // Colores que puede aplicar la directiva segun el argumento recibido.
    const colors = {
      bone: '#e8dcc2',
      white: '#ffffff'
    }

    // Aplica la tipografia Diablo al elemento.
    element.style.fontFamily = 'DiabloHeavy, sans-serif'

    // El argumento se escribe despues de los dos puntos (por ejemplo, v-diablo:bone).
    // Si no es "bone", se utiliza blanco como color predeterminado.
    const colorName = binding.arg === 'bone' ? 'bone' : 'white'
    element.style.color = colors[colorName]

    // Los modificadores se escriben despues de puntos (por ejemplo, .bottom o .top).
    // El valor de la directiva indica el grosor del borde en pixeles; si falta, usa 1.
    if (binding.modifiers.bottom || binding.modifiers.top) {
      const borderWidth = binding.value || 1
      const border = `${borderWidth}px solid ${colors[colorName]}`

      // Agrega un borde inferior y espacio entre el texto y el borde.
      if (binding.modifiers.bottom) {
        element.style.borderBottom = border
        element.style.paddingBottom = '10px'
      }

      // Agrega un borde superior y espacio entre el texto y el borde.
      if (binding.modifiers.top) {
        element.style.borderTop = border
        element.style.paddingTop = '10px'
      }
    }
  }
}

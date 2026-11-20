import numeral from "numeral";

// Convierte el valor a un número y lo presenta con separadores de miles.
const formatNumber = (num) => {
  // Si el valor falta, muestra un guion en lugar de un número.
  if (num == null || num === '') return '—'

  // Number permite recibir tanto números como cadenas numéricas.
  // El formato '0,0' agrega separadores de miles, por ejemplo: 184520 -> 184,520.
  return numeral(Number(num)).format('0,0')
}

// Permite importar esta función en los componentes que necesiten mostrar números.
export {
    formatNumber
}
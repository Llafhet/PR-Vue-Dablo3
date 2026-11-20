// Añade los iconos al registro global de Font Awesome.
import { library } from '@fortawesome/fontawesome-svg-core'

// Componente Vue que renderiza los iconos registrados.
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Iconos de marcas comerciales de Font Awesome.
import {
  faVuejs,
  faGithub,
  faHtml5,
  faCss3Alt,
  faJs,
  faTailwindCss,
  faFontAwesome,
} from '@fortawesome/free-brands-svg-icons'

// Iconos sólidos generales de Font Awesome.
import {
  faBolt,
  faLayerGroup,
  faNetworkWired,
  faSkull,
  faCrown,
  faDungeon,
  faHammer,
  faGem,
  faHatWizard,
} from '@fortawesome/free-solid-svg-icons'

// Registra en Font Awesome todos los iconos que se pueden usar en la aplicación.
library.add(
  faVuejs,
  faGithub,
  faHtml5,
  faCss3Alt,
  faJs,
  faTailwindCss,
  faFontAwesome,
  faBolt,
  faLayerGroup,
  faNetworkWired,
  faSkull,
  faCrown,
  faDungeon,
  faHammer,
  faGem,
  faHatWizard,
)

// Exportación predeterminada: Vue puede instalar este archivo con app.use().
export default {
  // Vue ejecuta install() y recibe la aplicación principal como argumento.
  install(app) {
    // Registra el componente para que esté disponible en todos los componentes.
    app.component('font-awesome-icon', FontAwesomeIcon)
  }
}
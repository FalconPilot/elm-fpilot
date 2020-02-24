import _Modules from './modules'

import { initializeModule } from './utils/elm'

document.addEventListener('DOMContentLoaded', () => {
  const env = {}

  const Modules = _Modules(env)

  // Initialize Elm modules
  initializeModule(Modules.App)
  initializeModule(Modules.Overlay)
})

import { Elm } from '../elm/App.elm'

import { getNodeKey } from './utils/elm'

const Overlay = env => ({
  main: Elm.Overlay,
  nodeKey: 'Overlay',
  flags: { env },
  ports: []
})

const App = env => ({
  main: Elm.App,
  nodeKey: 'App',
  flags: {
    overlayRootId: getNodeKey(Overlay(env).nodeKey),
    env
  },
  ports: []
})

export default env => ({
  App: App(env),
  Overlay: Overlay(env)
})

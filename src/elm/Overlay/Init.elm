module Overlay.Init exposing (init)

import Overlay.Types.Core exposing (Model, Msg, Flags)

init: Flags -> (Model, Cmd Msg)
init flags =
  let
    model: Model
    model =
      { flags = flags
      }
  in
    (model, Cmd.none)

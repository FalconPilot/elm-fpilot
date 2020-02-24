module Overlay.Update exposing (update)

import Overlay.Types.Core exposing (Model, Msg)

update: Msg -> Model -> (Model, Cmd Msg)
update msg model =
  case msg of
    _ ->
      (model, Cmd.none)

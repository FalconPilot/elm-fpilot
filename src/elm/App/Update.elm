module App.Update exposing (update)

import App.Types.Core exposing (Model, Msg)

update: Msg -> Model -> (Model, Cmd Msg)
update msg model =
  case msg of
    _ -> (model, Cmd.none)


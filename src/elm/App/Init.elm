module App.Init exposing (init)

import Browser.Navigation exposing (Key)
import Url exposing (Url)

import App.Types.Core exposing (Model, Msg, Flags)

init: Flags -> Url -> Key -> (Model, Cmd Msg)
init flags url key =
  let
    model: Model
    model =
      { flags = flags
      }
  in
    (model, Cmd.none)

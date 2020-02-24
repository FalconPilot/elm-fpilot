module Overlay exposing (main)

import Browser
import Platform exposing (Program)

import Overlay.Init exposing (init)
import Overlay.Types.Core exposing (Flags, Model, Msg)
import Overlay.Update exposing (update)
import Overlay.View exposing (view)

main: Program Flags Model Msg
main =
  Browser.element
    { init = init
    , update = update
    , view = view
    , subscriptions = \_ -> Sub.none
    }

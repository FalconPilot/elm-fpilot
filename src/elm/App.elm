module App exposing (main)

import Browser as Browser
import Platform exposing (Program)

import App.Init exposing (init)
import App.Types.Core exposing (Flags, Model, Msg(..))
import App.Update exposing (update)
import App.View exposing (view)

main: Program Flags Model Msg
main =
  Browser.application
    { init = init
    , update = update
    , view = view
    , subscriptions = \_ -> Sub.none
    , onUrlChange = \_ -> NoOp
    , onUrlRequest = \_ -> NoOp
    }

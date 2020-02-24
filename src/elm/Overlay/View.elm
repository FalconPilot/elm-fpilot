module Overlay.View exposing (view)

import Html exposing (Html, div, text)

import Overlay.Types.Core exposing (Model, Msg)

view: Model -> Html Msg
view model =
  div [] [ text "I am an Overlay container !" ]

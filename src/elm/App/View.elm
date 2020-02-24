module App.View exposing (view)

import Browser exposing (Document)
import Html exposing (Html, div)

import App.Types.Core exposing (Model, Msg)

view: Model -> Document Msg
view model =
  { title = "Coucou"
  , body = [ body model ]
  }


body: Model -> Html Msg
body model =
  div [] []

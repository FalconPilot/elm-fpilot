module App.View exposing (view)

import Browser exposing (Document)
import Html exposing (Html, div, text)
import Html.Attributes exposing (id)

import App.Types.Core exposing (Model, Msg)

view: Model -> Document Msg
view model =
  { title = "FPilot"
  , body =
    [ body model
    , div [ id model.flags.overlayRootId ] []
    ]
  }


body: Model -> Html Msg
body model =
  div [] [ text "Hello there" ]

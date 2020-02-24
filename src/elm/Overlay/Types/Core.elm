module Overlay.Types.Core exposing ( Model, Msg(..), Flags )

import Common.Types exposing (Env)

type alias Flags =
  { env: Env
  }

type alias Model =
  { flags: Flags
  }

type Msg
  = NoOp

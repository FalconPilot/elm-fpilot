module App.Types.Core exposing (Flags, Model, Msg(..))

import Common.Types exposing (Env)

type alias Flags =
  { overlayRootId: String
  , env: Env
  }

type alias Model =
  { flags: Flags
  }

type Msg
  = NoOp

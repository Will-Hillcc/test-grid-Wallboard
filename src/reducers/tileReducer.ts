
export interface Tile_Message {
    queueNumber: string,
    Name: string,
    Queue: string,
    LoggedIn: string,
    Available: string,
    Callers: string,
    LongestHoldTime: string,
    Agents_Busy_Call: any,
    Calls_parked: any,
    Longest_parked: any,
    Agents_DND: any,
    Dedicated_Free: any,
    Dedicated_Busy: any,
    Dedicated_Logged: any,
    Calls_Answered: any,
    Calls_over_5s: any,
    Calls_Lost_5: any,
    RoLawn_Lost_10s: any,
    LiberateGroup_CA: any,
    LiberateGroup_Lost: any,
    Active_Calls: any,
    Managers_Free: any    
  }



  export interface Tile_MessageState {
    data: Tile_Message[];
    loading: boolean;
    error: string | null;
  }

  const initialState: Tile_MessageState = {
    data: [],
    loading: false,
    error: null,
  };

  type TileMessageAction =
  | { type: "RECEIVE_TILE_UPDATE"; payload: Tile_Message }

  const tileReducer = (
    state: Tile_MessageState = initialState,
    action: TileMessageAction
  ): Tile_MessageState => {
    switch (action.type) {
      case "RECEIVE_TILE_UPDATE":
        console.log(action)
  
      default:
        return state;
    }
  };

  export default tileReducer;
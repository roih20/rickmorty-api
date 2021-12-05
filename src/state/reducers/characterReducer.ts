
import { Character } from "../../components/CharactersList";
import { ActionType } from "../action-types";
import { Action } from "../actions"

const reducer = (character = [] ,action: Action) => {
    switch(action.type){
        case ActionType.FETCH_ALL:
            return action.payload;
        default:
            return character;
    }
}

export default reducer;
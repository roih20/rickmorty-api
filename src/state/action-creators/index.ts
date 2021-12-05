import { Action } from "../actions"
import { Dispatch } from "redux";
import * as api from "../../api/index";
import { ActionType } from "../action-types";


export const fetchAll = () => async (dispactch: Dispatch<Action>) => {

    try {
        const { data } = await api.fetchCharacters();
        const results = data.results;

        dispactch({type: ActionType.FETCH_ALL, payload: results})

    } catch (error) {
        console.log(error);
    }
}



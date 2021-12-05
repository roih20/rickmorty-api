import { Character } from "../../components/CharactersList";
import { ActionType } from "../action-types";

interface FetchAll {
    type: ActionType.FETCH_ALL;
    payload: [];
}






export type Action =  FetchAll
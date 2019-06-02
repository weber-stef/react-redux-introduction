import { combineReducers } from "redux";
import * as actions from "../actions/index";
import uuid from "uuid/v4";
function filter(state = actions.filters.ALL, action) {
    switch (action.type) {
        case actions.SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}
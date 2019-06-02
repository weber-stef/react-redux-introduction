/*
 * Action types
 */

// Filter

export const SET_FILTER = "SET_FILTER";

// Todo Items

export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO_TEXT = "UPDATE_TODO_TEXT";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

/*
 * Other constants
 */
export const filters = {
    ALL: "all",
    DONE: "done",
    UNDONE: "undone"
};
/*
* Action creators
*/

// Filter

export const setFilter = filter => {
    return { type: SET_FILTER, filter };
};

// Todo items

export const addToDo = text => {
    return { type: ADD_TODO, text };
};

export const updateToDoText = (uuid, text) => {
    return { type: UPDATE_TODO_TEXT, uuid, text };
};

export const removeToDo = uuid => {
    return { type: REMOVE_TODO, uuid };
};

export const toggleToDo = uuid => {
    return { type: TOGGLE_TODO, uuid };
};
function toDoItems(state = {}, action) {
    switch (action.type) {
        case actions.ADD_TODO:
            const id = uuid();

            return {
                ...state,
                [id]: {
                    uuid: id,
                    text: action.text,
                    done: false
                }
            };
        case actions.UPDATE_TODO_TEXT:
            return {
                ...state,
                [action.uuid]: {
                    ...state[action.uuid],
                    text: action.text
                }
            };
        case actions.TOGGLE_TODO:
            return {
                ...state,
                [action.uuid]: {
                    ...state[action.uuid],
                    done: !state[action.uuid].done
                }
            };
        case actions.REMOVE_TODO:
            let nextState = { ...state };
            delete nextState[action.uuid];

            return nextState;
        default:
            return state;
    }
}
const appReducer = combineReducers({
    filter,
    toDoItems
});

export default appReducer;
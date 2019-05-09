import {
    ACTION_CREATE_POST, ACTION_DELETE_POST
} from '../actions'

import {generateId} from '../utils';

export default function posts(state={}, action={type: ''}) {

    switch(action.type) {
        case ACTION_CREATE_POST:
        // create a post! 
        const id = generateId();
        console.log(`the new id is ${id}`)
        // console.log(`Sounds like you wanna create a post`)
        const newState = {
            ...state,
            // to use a variable as a key
            // in an object literal,
            // wrao the varuable in square brackets
            [id]: action.payload
        };

        // to get the equivalent result, you
        /// can use the familiar assignment syntax:
        // newState[id] = action.payload
        return newState;
        break;
        case ACTION_DELETE_POST:
            const deleteState = {
                ...state
            };
            delete deleteState[action.payload.id];
            return deleteState;
        break;
        default:
            return state;
        break;
    }
}
import * as actions from './imas.actions';

const initialState = {
    data: {}
};

export function imasReducer(state = initialState, action: actions.all) {
    switch (action.type) {
        case actions.GET_DATA:
            return {...state};
        case actions.SET_DATA:
            return { ...state, data: action.payload };
    }
}
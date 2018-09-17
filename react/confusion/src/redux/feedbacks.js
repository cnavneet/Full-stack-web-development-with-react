import * as ActionTypes from './ActionTypes';

export const Feedbacks = (state = {
    errMess: null,
    feedbacks: []}, action) => {
        switch(action.type){
            case ActionTypes.ADD_FEEDBACK:
                return {...state, errMess: null, feedbacks: action.payload};

            case ActionTypes.FEEDBACK_FAILED:
                return {...state, errMess: action.payload};

            case ActionTypes.ADD_FEEDBACK:
                return {...state, feedbacks: feedback};
            
            default:
            return state;
        }
    }
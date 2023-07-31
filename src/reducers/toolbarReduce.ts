import React, {useRef} from 'react'
import { Dispatch} from 'redux';

const actionName = {
    SCROLL: 'SCROLL',
}

type MyDispatch = Dispatch
type MyAction = {
    type: string;
    ref: React.RefObject<HTMLUListElement> | null;
};

type MyState = {
    ref: React.RefObject<HTMLUListElement> | null;
}

const initialState:MyState = {
    ref: null
}

export default (state = initialState, action: MyAction) => {
    switch (action.type) {
        case actionName.SCROLL: {
            if (action.ref?.current) {
                action.ref.current.scrollIntoView({ behavior: 'smooth' });
            }
            break;
        }
        default:
            return state;
    }
};

// export const addCard = (card: {}) => {
//     return(dispatch: MyDispatch)  => {
//         return dispatch({type: actionName.ADD_CARD, card})
//     }
// }

export const handleClick = (ref: React.Ref<HTMLUListElement>|null) => {
    return(dispatch: MyDispatch)  => {
        return dispatch({type: actionName.SCROLL,ref})
    }
}

// function handleClick() {
//     ref.current?.scrollIntoView({behavior: 'smooth'})
// }
import ACTION_TYPES from '../actions/actionTypes';


const initialState = {
    user: null,
    chatList: [],
    currentChat: '63e39354414bb17f94d3cf97',
    error: null
}

function reducer(state = initialState, action) {
    console.log(action);
    switch(action.type) {
        case ACTION_TYPES.SEND_NEW_MESSAGE_REQUEST: {
            ///  включили спінер
        }
        case ACTION_TYPES.SEND_NEW_MESSAGE_SUCCESS:{
            const {data} = action;
            return {
                ...state,
                chatList: [...state.chatList, data]
            }
        }
        case ACTION_TYPES.SEND_NEW_MESSAGE_ERROR: {
            const {error} = action;
            return {
                ...state,
                error
            }
        }
        default: {
            return state
        }
    }
}

export default reducer;

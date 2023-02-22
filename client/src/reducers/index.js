import ACTION_TYPES from '../actions/actionTypes';
const initialState = {
    user: null,
    chatList: [],
    currentChat: null,
    error: null,
    isFetching: false
}
function reducer(state = initialState, action) {
    console.log(action);
    switch(action.type) {
        
        case ACTION_TYPES.SEND_NEW_MESSAGE_SUCCESS:{
            const {data} = action;
            return {
                ...state,
                currentChat: {
                    ...state.currentChat,
                    messages: [...state.currentChat.messages, data]
                }
            }
        }
        case ACTION_TYPES.GET_USER_CHATS_SUCCESS: {
            const {data} = action;
            return {
                ...state,
                chatList: data
            }
        }
        case ACTION_TYPES.GET_CHAT_WITH_MESSAGES_SUCCESS: {
            const {data} = action;
            console.log(action);
            return {
                ...state,
                currentChat: data
            }
        }
        case ACTION_TYPES.GET_USER_DATA_SUCCESS:
        case ACTION_TYPES.REGISTER_USER_SUCCESS: 
        case ACTION_TYPES.LOGIN_USER_SUCCESS: {
            const {data} = action;
            return {
                ...state,
                user: data
            }
        }
        case ACTION_TYPES.GET_CHAT_WITH_MESSAGES_ERROR:
        case ACTION_TYPES.GET_USER_CHATS_ERROR:
        case ACTION_TYPES.LOGIN_USER_ERROR: 
        case ACTION_TYPES.REGISTER_USER_ERROR:
        case ACTION_TYPES.SEND_NEW_MESSAGE_ERROR: {
            const {error} = action;
            return {
                ...state,
                error: error.message
            }
        }
        case ACTION_TYPES.GET_USER_CHATS_REQUEST:
        case ACTION_TYPES.REGISTER_USER_REQUEST:
        case ACTION_TYPES.LOGIN_USER_REQUEST: 
        case ACTION_TYPES.SEND_NEW_MESSAGE_REQUEST: {
            return {
                ...state,
                isFetching: true
            }
        }
        default: {
            return state
        }
    }
}
export default reducer;
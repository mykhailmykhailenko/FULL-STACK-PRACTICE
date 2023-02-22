import ACTION_TYPES from './actionTypes';

/*  Auth actionCreators  */

export const loginUserAction = (payload) => ({
    type: ACTION_TYPES.LOGIN_USER_REQUEST,
    payload
})

export const logingUserSuccess = (data) => ({
    type: ACTION_TYPES.LOGIN_USER_SUCCESS,
    data
})

export const logingUserError = (error) => ({
    type: ACTION_TYPES.LOGIN_USER_ERROR,
    error
})
///////

export const registerUserAction = (payload) => ({
    type: ACTION_TYPES.REGISTER_USER_REQUEST,
    payload
})

export const registerUserSuccess = (data) => ({
    type: ACTION_TYPES.REGISTER_USER_SUCCESS,
    data
})

export const registerUserError = (error) => ({
    type: ACTION_TYPES.REGISTER_USER_ERROR,
    error
});


/* Chat actionCreators */


export const sendNewMessageAction = (payload) => ({
    type: ACTION_TYPES.SEND_NEW_MESSAGE_REQUEST,
    payload
});

export const sendNewMessageSuccess = (data) => ({
    type: ACTION_TYPES.SEND_NEW_MESSAGE_SUCCESS,
    data
})
export const sendNewMessageError = (error) => ({
    type: ACTION_TYPES.SEND_NEW_MESSAGE_ERROR,
    error
});


///////



export const getUserChatsAction = () => ({
    type: ACTION_TYPES.GET_USER_CHATS_REQUEST,
});

export const getUserChatsSuccess = (data) => ({
    type: ACTION_TYPES.GET_USER_CHATS_SUCCESS,
    data
})

export const getUserChatsError = (error) => ({
    type: ACTION_TYPES.GET_USER_CHATS_ERROR,
    error
});

//////

export const getChatWithMessagesAction = (payload) => ({
    type: ACTION_TYPES.GET_CHAT_WITH_MESSAGES_REQUEST,
    payload
});

export const getChatWithMessagesSuccess = (data) => ({
    type: ACTION_TYPES.GET_CHAT_WITH_MESSAGES_SUCCESS,
    data
})

export const getChatWithMessagesError = (error) => ({
    type: ACTION_TYPES.GET_CHAT_WITH_MESSAGES_ERROR,
    error
});  
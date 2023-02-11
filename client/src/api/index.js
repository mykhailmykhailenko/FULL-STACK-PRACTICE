import axios from 'axios';
const httpClient = axios.create({
    baseURL: 'http://localhost:5000/api'
});
/* Auth api */
export const signIn = async (userData) => await httpClient.post('/users/sign-in', userData);
export const signUp = async (userData) => await httpClient.post('/users/sign-up', userData);
export const logOut = async () => {
    localStorage.clear();
}  
export const refreshSession = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    const {data} = await httpClient.post('/users/refresh', {refreshToken});
    return data;
}
httpClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if(token) {
        config.headers = {
            ...config.headers,
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }
    return config;
}, (err) => Promise.reject(err));
httpClient.interceptors.response.use((response) => {
    if(response.data.tokens) {
        const {data: {tokens: {accessToken, refreshToken}}} = response;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
    }
    return response;
}, (err) => {
    if (err.response.status === 403 && localStorage.getItem('refreshToken')) {
       console.log('REFRESH');
       return refreshSession()
       .then(() => {
        console.log('RETRY request');
        return httpClient(err.config);
       })
    } else if (err.response.status === 401) {
        logOut();
        /// HERE - redirect to home
    } else {
        return Promise.reject(err);
    }
})
/* Chat api  
*/

export const createChat = async (data) => await httpClient.post('/chats/', data);

export const addNewMessage = async ({chatId, body}) => await httpClient.post(`/chats/${chatId}`, {body});

export const getChatWithMessages = async (chatId) => await httpClient.get(`/chats/${chatId}`);

export const getUserChats = async () => await httpClient.get('/chats/user/all');
export const addUserToChat = async (chatId, userId) => await httpClient.put(`/chats/${chatId}`, {userId});
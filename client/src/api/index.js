import axios from 'axios';
const httpClient = axios.create({
    baseURL: 'http://localhost:5000/api'
});


httpClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if(token) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`
        }
    }
    return config;
}, (err) => Promise.reject(err));

httpClient.interceptors.response.use((response) => {
    if(response.data.token) {
        const {data: {token}} = response;
        localStorage.setItem('token', token);
    }
    return response;
})


/* Auth api */

export const signIn = async (userData) => await httpClient.post('/users/sign-in', userData);

export const signUp = async (userData) => await httpClient.post('/users/sign-up', userData);


/* Chat api  
*/

export const createChat = async (data) => await httpClient.post('/chats/', data);

export const addNewMessage = async (chatId, data) => await httpClient.post(`/chats/${chatId}`, data);

export const getChatWithMessages = async (chatId) => await httpClient.get(`/chats/${chatId}`);


export const getUserChats = async () => await httpClient.get('/chats/user/all');

export const addUserToChat = async (chatId, userId) => await httpClient.put(`/chats/${chatId}`, {userId});
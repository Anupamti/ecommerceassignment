import axios from 'axios';

// const url = 'http://localhost:5000/posts';

const API = axios.create({ baseURL: 'https://ecommerceanupamsassignment.herokuapp.com/' })

const url = 'https://ecommerceanupamsassignment.herokuapp.com/userData';

const cart = 'https://ecommerceanupamsassignment.herokuapp.com/cart/'
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const createUser = (formData) => API.post('userData/createuser', formData)
export const getUserData = () => API.get('userData/getuser')

export const signIn = (formData) => API.post('user/signin', formData)
export const signUp = (formData) => API.post('user/signup', formData)

export const deleteData = (id) => API.delete(`${url}/${id}`)

export const addToCart = (data) => API.post('cart/addtocart', data)

export const getCart = () => API.get('cart/getcart')

export const removefromCart = (id) => API.delete(`${cart}removefromcart?id=${id}`)
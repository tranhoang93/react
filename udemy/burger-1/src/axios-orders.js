import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-7443c.firebaseio.com/'
});

export default instance;
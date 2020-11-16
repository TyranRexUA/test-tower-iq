import axios from 'axios';
import { getUsersAPIType } from '../types/types';

const API = {
    getUsers() {
        return axios.get<getUsersAPIType>('/users.json').then(response => response.data.users)
    }
}
export default API;
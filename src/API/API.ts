import axios from 'axios';
import { stateType } from '../types/types';

const API = {
    getUsers() {
        return axios.get<stateType>('/users.json').then(response => response.data.users)
    }
}
export default API;
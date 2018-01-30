import axios from 'axios';
import instance from './service';

export default {
    async createToken(username, password) {
        return await instance.post('/users',{username, password})
    }    
}

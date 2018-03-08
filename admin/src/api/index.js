import axios from 'axios';
import instance from './service';

export default {
    async createToken(username, password) {
        return await instance.post('/api/users',{username, password})
    },
    async createDraft (title, imageSrc ,content) {
        return await instance.post('/api/drafts', {title, imageSrc, content})
    },
    async draftList () {
        return await instance.get('/api/drafts')
    }  
}

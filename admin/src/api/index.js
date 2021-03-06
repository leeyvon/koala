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
    },
    async getDraft (id) {
        return await instance.get(`/api/drafts/${id}`)
    },
    async deleteDraft (id) {
        return await instance.delete(`/api/drafts/${id}`)
    },
    async modifyDraft (id, modifyOpt) {
        return await instance.patch(`/api/drafts/${id}`, {modifyOpt})
    },
    async publish (id) {
        return await instance.post('/api/publication', {id})
    },
    async deletePub (id) {
        return await instance.delete(`/api/publication/${id}`)
    }
}

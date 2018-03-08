import * as types from './mutation-types';
import api from '@/api';
import router from '@/router';

export async function createToken (store, {username, password}) {
    const { data } = await api.createToken(username, password);
    if (data.status === '0') {
        store.commit(types.CREATE_TOKEN, data.token)
        router.replace('drafts')
    }
}

export async function createDraft (store, {title, imageSrc, content}) {
    const {data} = await api.createDraft(title, imageSrc, content);
    return data;
}

export async function getDraftList (store) {
    const { data } = await api.draftList();
    return data;
} 
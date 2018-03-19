import * as types from './mutation-types';
import api from '@/api';
import router from '@/router';

export async function createToken (store, {username, password}) {
    const { data } = await api.createToken(username, password);
    if (data.status === '0') {
        store.commit(types.CREATE_TOKEN, data.token)
        router.replace('list')
    }
}

export async function userLogout (store) {
    store.commit(types.DELETE_TOKEN);
}

export async function createDraft (store, {title, imageSrc, content}) {
    const {data} = await api.createDraft(title, imageSrc, content);
    return data;
}

export async function getDraftList (store) {
    const {data} = await api.draftList();
    return data;
} 

export async function getDraft (store, id) {
    const {data} = await api.getDraft(id);
    return data;
}

export async function deleteDraft (store, id) {
    const {data} = await api.deleteDraft(id);
    return data;
}

export async function modifyDraft (store ,{id, modifyOpt}) {
    const {data} = await api.modifyDraft(id, modifyOpt);
    return data;
}

export async function publication (store, id) {
    const {data} = await api.publish(id);
    return data;
}

export async function deletePub (store, id) {
    const {data} = await api.deletePub(id);
    return data;
}
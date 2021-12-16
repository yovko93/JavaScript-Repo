import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Application-specific requests
export async function getAllEvents() {
    return await api.get(host + '/data/theaters?sortBy=_createdOn%20desc&distinct=title');
}

export async function getEventById(id) {
    return await api.get(host + '/data/theaters/' + id);
}

export async function getMyEvents(userId) {
    return await api.get(host + `/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function createEvent(event) {
    return await api.post(host + '/data/theaters', event);
}

export async function updateEvent(id, event) {
    return await api.put(host + '/data/theaters/' + id, event);
}

export async function deleteEvent(id) {
    return await api.del(host + '/data/theaters/' + id);
}

export async function addAlike(theaterId) {
    return await api.post(host + '/data/likes', theaterId);
}

export async function getTotalLikesForEvent(theaterId) {
    return await api.get(host + `/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`);
}

export async function getLikesFromUser(theaterId, userId) {
    return await api.get(host + `/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}
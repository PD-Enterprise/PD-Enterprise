import { writable } from 'svelte/store';

export let theme = writable(false);
export let showModal = writable(false);
export const loggedIn = writable(false);

// Auth
export const auth0Client = writable(null);
export const isAuthenticated = writable(false);
export const user = writable({});
export const popupOpen = writable(false);
export const error = writable();
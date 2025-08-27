import { writable } from 'svelte/store';

export let theme = writable(false);
export let showModal = writable(false);
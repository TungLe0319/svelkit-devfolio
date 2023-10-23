import { writable } from 'svelte/store';

export const isDarkMode = writable(true)
export const videoSource = writable('./animated1.mp4');

export const videoPaused =writable(false)
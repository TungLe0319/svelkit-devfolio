import { writable } from 'svelte/store';

export const isDarkMode = writable(true)
export const videoSource = writable('src/lib/assets/animated1.mp4');


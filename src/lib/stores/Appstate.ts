import { writable } from 'svelte/store';

export const contactIsInView = writable(false);
export const scrollY = writable(0);
export const isDarkMode = writable(true);
export const videoSource = writable('./animated1.mp4');
export const videoPaused = writable(false);

type NavigationState = 'loading' | 'loaded' | null;

export default writable<NavigationState>(null);

export const sectionHeaders = writable({
	about: {
		title: 'About Me',
		subtitle: 'Get to know me'
	},
	skills: {
		title: 'Skills',
		subtitle: `Some of the technologies I've worked with`
	},
	experience: {
		title: 'Experience',
		subtitle: 'Where Got Experience'
	},
	projects: {
		title: 'Projects',
		subtitle: 'Check out my applications'
	},
	contact: {
		title: 'Contact',
		subtitle: 'Get in touch'
	}
});

export const aboutSectionHeader = writable({
	title: 'About Me',
	subtitle: 'Get to know me'
});

export const skillsSectionHeader = writable({
	title: 'Skills',
	subtitle: `Some of the technologies I've worked with`
});

export const experienceSectionHeader = writable({
	title: 'Experience',
	subtitle: 'Where Got Experience'
});

export const projectsSectionHeader = writable({
	title: 'Projects',
	subtitle: 'Check out my applications'
});

export const contactSectionHeader = writable({
	title: 'Contact',
	subtitle: 'Get in touch'
});

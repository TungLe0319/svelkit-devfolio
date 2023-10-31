// // @ts-nocheck

import { error } from '@sveltejs/kit';
import projectsData from '$lib/data/Projects.json';
import skillsIconsData from '$lib/data/SkillIcons.json';

/** @type {import('./$types').LayoutServerLoad} */
export const load = async (event) => {
	const { url } = event;
	const projects = projectsData;
	const skillsIcons = skillsIconsData;
	return {
		pathname: url.pathname,
		projects,
		skillsIcons
	};
};

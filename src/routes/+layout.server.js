// // @ts-nocheck


import { error } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export const load = async (event) => {
	const { url } = event;

	return {

		pathname: url.pathname
	};
};

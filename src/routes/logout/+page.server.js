import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    cookies.delete('username');
    cookies.delete('password');

    throw redirect(303, '/login');

}
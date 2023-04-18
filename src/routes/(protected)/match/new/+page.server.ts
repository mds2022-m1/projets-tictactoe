import { redirect } from '@sveltejs/kit';
import type { Match } from '@prisma/client';
import { z } from 'zod';
import { getGames, createMatch } from '$root/utils/prisma';
import type { Actions, PageData } from './$types';

// shema for match name required and game required and not empty
const matchSchema = z.object({
	name: z
		.string({ required_error: 'Le nom de la partie est requis' })
		.nonempty({ message: 'Le nom de la partie ne peut pas être vide' }),
	game_id: z.string({ required_error: 'Le jeu est requis' }),
});

export const actions: Actions = {
	default: async (event) => {
		// get form data
		const formData = Object.fromEntries(await event.request.formData());
		let match: Match;
		try {
			// parse form data with schema
			const matchData = matchSchema.parse(formData);
			// create match
			match = await createMatch(matchData);
		} catch (error) {
			// if error is generated by zod
			if (error instanceof z.ZodError) {
				// map errors to array of objects
				let errors_detail = {};
				for (const err of error.issues) {
					errors_detail = { ...errors_detail, [err.path[0]]: err.message };
				}

				// return error details to client without redirect
				return {
					success: false,
					errors: errors_detail,
				};
			}
			if (error instanceof Error) {
				return { success: false, errors: error.message };
			}
			throw error;
		}
		// redirect to match page
		throw redirect(303, `/match/${match.id}`);
	},
};

export const load: PageData = async () => {
	const games = await getGames();
	return {
		props: {
			games,
		},
	};
};

import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getMatchAndUserMatchById, createUserMatch, getEloByUserIdAndGameId, createEloByUserIdAndGameId } from '$root/utils/prisma';

interface CustomLocals extends Record<string, any> {
	user?: {
		email: string;
		id: string;
	};
}

export const load: PageServerLoad = async ({
	params: { id },
	locals,
}: {
	params: { id: string };
	locals: CustomLocals;
}) => {
	const { user } = locals as CustomLocals;

	let match = await getMatchAndUserMatchById(id);
	if (!match) throw redirect(303, '/');

	const userIds = match.user_matches.map((userMatch) => userMatch.user_id);

	if (!user?.id || (!userIds?.includes(user.id) && match?.user_matches.length === 2)) {
		throw redirect(303, '/');
	}

	const elo = await getEloByUserIdAndGameId(user.id, match.game_id);
	if (!elo) {
		await createEloByUserIdAndGameId(user.id, match.game_id);
	}




	if (!userIds?.includes(user.id)) {
		await createUserMatch(id, user.id);
		match = await getMatchAndUserMatchById(id);
	}

	if (!match) {
		throw redirect(303, '/');
	}

	return {
		success: true,
		match,
		userId: user.id,
	};
};

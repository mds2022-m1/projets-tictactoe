import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getMatchAndUserMatchById, createUserMatch } from '$root/utils/prisma';

interface CustomLocals extends Record<string, any> {
    user?: {
        email: string;
        id: string;
    };
}

export const load: PageServerLoad = async ({ params: { id }, locals }: { params: { id: string }, locals: CustomLocals }) => {

	    const { user } = locals as CustomLocals;


		let match = await getMatchAndUserMatchById(id);

		const userIds = match?.user_matches.map((userMatch) => userMatch.user_id);

		if (!user?.id || (!userIds?.includes(user.id) && match?.user_matches.length === 2)) {
			throw redirect(303, '/');
		}

		if (!userIds?.includes(user.id)) {
			const userMatch = await createUserMatch(id, user.id);
		}

		match = await getMatchAndUserMatchById(params.id);

		if (!match) {
			return {
				success: false,
			};
		}
		return {
			success: true,
			match,
			userId: user.id,
		};
	throw redirect(303, '/');
};

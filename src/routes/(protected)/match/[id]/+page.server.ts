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

    const match = await getMatchAndUserMatchById(id);
    const userIds = match?.user_matches?.map(({ user_id }) => user_id) ?? [];

    if (!user?.id || (!userIds?.includes(user.id) && match?.user_matches.length === 2)) {
        throw redirect(303, '/');
    }

    if (!userIds?.includes(user.id)) {
        const isCreator = !userIds.length;
        await Promise.all([
            createUserMatch(id, user.id, isCreator),
            match?.user_matches.length === 2 && createUserMatch(id, user.id, !isCreator)
        ]);
    }
	
    if (!match) {
        throw redirect(303, '/');
    }

    return {
        success: true,
        match,
        userId: user.id
    };
};

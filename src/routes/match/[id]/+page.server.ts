import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import {
    getMatchAndUserMatchById,
    createUserMatch, getUserById
} from '$root/utils/prisma'



export const load: PageServerLoad = async ({ params, cookies }) => {

    const tastyCookie = cookies.get('username');

    if (tastyCookie) {
        const perso = await getUserById(tastyCookie);

        let match = await getMatchAndUserMatchById(params.id)

        const userIds = match?.user_matches.map((userMatch) => userMatch.user_id);

        if (!perso?.id || !userIds?.includes(perso.id) && match?.user_matches.length === 2) {
            throw redirect(303, '/');
        } 

        if (!userIds?.includes(perso.id)) {
            const userMatch = await createUserMatch(params.id, perso.id)
        }

        match = await getMatchAndUserMatchById(params.id) 

        if (!match) {
            return {
                success: false,
            };
        }
        return {
            success: true,
            match: match,
            userId: perso.id
        }
    }
    throw redirect(303, '/');

}


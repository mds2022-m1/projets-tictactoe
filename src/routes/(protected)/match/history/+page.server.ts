import type { PageServerLoad } from './$types';
import { getAllUserMatchByUserId } from '$root/utils/prisma';

interface CustomLocals extends Record<string, any> {
    user?: {
        email: string;
        id: string;
    };
}


export const load: PageServerLoad = async ({ locals }) => {

    const { user } = locals as CustomLocals;

    const matchPlayed = await getAllUserMatchByUserId(user.id);

    
    return {
        props: {    
            matchPlayed
        }
    };
    

}
import type {PageServerLoad} from './$types';

import {
    getMatchById
} from '$root/utils/prisma'



export const load: PageServerLoad = async ({params}) => {
    const match = await getMatchById(params.id);
    
    if (!match) {
        return {
            success: false,
        };
    }
    return {
        success: true,
        match: match
    }
}
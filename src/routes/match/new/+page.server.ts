
import type { Actions, PageData } from './$types';
import { redirect } from '@sveltejs/kit';





import {
    getMatchs,
    createMatch
} from '$root/utils/prisma'

 
export const actions: Actions = {
  default: async (event) => {
    const match = await createMatch(event.request);
    if (!match) {
        return {
            success: false,
        };
    }
    throw redirect(303, '/match/'+match.id);
  }
};






    
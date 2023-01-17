import type { error } from '@sveltejs/kit'
import type { Actions, PageData } from './$types';





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
    return {
        success: true,
        match : match
    };
  }
};






    
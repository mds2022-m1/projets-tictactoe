import type { error } from '@sveltejs/kit'
import type { Actions } from './$types';



import {
    getMatchs,
    createMatch
} from '$root/utils/prisma'

 
export const actions: Actions = {
  default: async (event) => {
    await createMatch(event.request)
  }
};
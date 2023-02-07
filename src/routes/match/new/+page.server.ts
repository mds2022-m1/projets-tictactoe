
import type { Actions, PageData } from './$types';
import { redirect } from '@sveltejs/kit';
import type { Match } from '@prisma/client'
import {
  getGames,
  createMatch
} from '$root/utils/prisma'
import { z } from "zod";

// shema for match name required and game required and not empty
const matchSchema = z.object({
  name: z.string({ required_error: "Le nom de la partie est requis" }).nonempty({ message: "Le nom de la partie ne peut pas être vide" }),
  game_id: z.string({ required_error: "Le jeu est requis" }),
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
      if (error instanceof z.ZodError) {
        return { success: false, errors: error.formErrors.fieldErrors, };
      }
      if (error instanceof Error) {
        return { success: false, errors: error.message }
      }
      throw error
    }
    // redirect to match page
    throw redirect(303, '/match/' + match.id);
  }
};


export const load: PageData = async () => {
  const games = await getGames();
  return {
    props: {
      games: games
    }
  };
}







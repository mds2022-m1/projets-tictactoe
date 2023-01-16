import type { error } from '@sveltejs/kit'

// import type { Load } from './$types'


import {
	getMatchs
} from '$root/utils/prisma'

export const load = async () => {
    const matchs = await getMatchs()
    return {
		  matchs
    }
} 
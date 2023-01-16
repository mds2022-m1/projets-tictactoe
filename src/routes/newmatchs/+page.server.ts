import prisma from '$root/lib/prisma'
import type { Load } from '@sveltejs/kit'


export const load: Load = async () => {
    const matchs = await prisma.matchs.findMany()
    if(!matchs) {
        return {
			headers: { 'Content-Type': 'application/json' },
			status: 404,
			body: { error: 'No matchs found' }
		}	
    }

    return {
		headers: { 'Content-Type': 'application/json' },
		status: 200,
		body: { matchs }
    }
}
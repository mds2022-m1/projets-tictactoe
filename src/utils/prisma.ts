import prisma from '$root/lib/prisma'

// export function getMatchs with Load type
export async function getMatchs(){
    const matchs = await prisma.matchs.findMany()
    return matchs.map((match) => {
        return {
            id: match.id,
            started_at: match.started_at,
            finished_at: match.finished_at,
            game_id: match.game_id,
        }
    })
}

// export function createMatch with Save type
export async function createMatch(request: Request){
    const form = await request.formData()
	const nameMatch = String(form.get('nameMatch'))
    

    const match = await prisma.matchs.create({
        data: {
            name: nameMatch,
            game_id: "759857d8-95ad-4441-bdbd-1ee4bbf1990b"
            
        },
    })

    return match;
}
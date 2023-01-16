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
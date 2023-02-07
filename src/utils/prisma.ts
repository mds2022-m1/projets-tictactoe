import prisma from '$root/lib/prisma'
import type { Match } from '@prisma/client'

// export function getMatchs with Load type
export async function getMatchs(){
    const matchs = await prisma.match.findMany()
    return matchs.map((match: Match) => {
        return {
            id: match.id,
            started_at: match.started_at,
            finished_at: match.finished_at,
            game_id: match.game_id,
        }
    })
}

// get match by id
export async function getMatchById(id: string){
    const match = await prisma.match.findUnique({
        where: {
            id: id
        }
    })
    return match;
}

// interface MatchInput 
interface MatchInput {
    name: string;
    game_id: string;
}
// export function createMatch
export async function createMatch(matchInput: MatchInput){
    const match = await prisma.match.create({
        data: {
            name: matchInput.name,
            game_id: matchInput.game_id,
        },
    })
    return match;
}


// export function getGames with Load type
export async function getGames(){
    const games = await prisma.game.findMany()
    return games.map((game) => {
        return {
            id: game.id,
            name: game.name,
        }
    })
}
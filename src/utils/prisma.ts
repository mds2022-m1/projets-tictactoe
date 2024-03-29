import type { Match, UserMatch } from '@prisma/client';
import { db } from '$root/lib/database';

// export function getMatchs with Load type
export async function getMatchs() {
	const matchs = await db.match.findMany();
	return matchs.map((match: Match) => {
		return {
			id: match.id,
			started_at: match.started_at,
			finished_at: match.finished_at,
			game_id: match.game_id,
		};
	});
}

// get match by id
export async function getMatchById(id: string) {
	const match = await db.match.findUnique({
		where: {
			id,
		},
	});
	return match;
}

// interface MatchInput
interface MatchInput {
	name: string;
	game_id: string;
	moves: string;
}
// export function createMatch
export async function createMatch(matchInput: MatchInput, user_id: string) {
	const match = await db.match.create({
		data: {
			name: matchInput.name,
			game_id: matchInput.game_id,
			creator_id: user_id,
		},
	});
	return match;
}

// get match and userMatch by id of match
export async function getMatchAndUserMatchById(id: string) {
	const match = await db.match.findUnique({
		where: {
			id,
		},
		include: {
			user_matches: true,
		},
	});
	return match;
}

// insert userMatch by id of match and id of user
export async function createUserMatch(match_id: string, user_id: string) {
	const userMatch = await db.userMatch.create({
		data: {
			match_id: match_id,
			user_id: user_id,
			score: null,
		}
	})
	return userMatch;
}

// export function getGames with Load type
export async function getGames() {
	const games = await db.game.findMany();
	return games.map((game) => {
		return {
			id: game.id,
			name: game.name,
		};
	});
}

// get User By Id
export async function getUserById(id: string) {
	const user = await db.user.findUnique({
		where: {
			id,
		},
	});
	return user;
}


// update moves Match by id
export async function updateMovesMatchById(id: string, moves: string) {
	const match = await db.match.update({
		where: {
			id,
		},
		data: {
			moves: moves,
		},
	});
	return match;
}

/*
 * Get Elo by user_id and game_id
 * @param {string} user_id
 * @param {string} game_id
 * @returns {Promise<Elo>}
 */
export async function getEloByUserIdAndGameId(user_id: string, game_id: string) {
	const elo = await db.elo.findFirst({
		where: {
			user_id: user_id,
			game_id: game_id
		},
	});
	return elo;
}

/*
 * Create Elo by user_id and game_id
 * @param {string} user_id
 * @param {string} game_id
 * @returns {Promise<Elo>}
 */
export async function createEloByUserIdAndGameId(user_id: string, game_id: string) {
	const elo = await db.elo.create({
		data: {
			user_id: user_id,
			game_id: game_id
		},
	});
	return elo;
}


/*
 * Get all UserMatch by user_id include Match and Game
 * @param {string} user_id
 * @returns {Promise<UserMatch>}
 */
export async function getAllUserMatchByUserId(user_id: string) {
	const userMatchs = await db.userMatch.findMany({
		where: {
			user_id: user_id,
		},include:
		{
			match: {
				include: {
					game: true,
				}
			}
		},
	});
	return userMatchs;
}	
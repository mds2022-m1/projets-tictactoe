<script lang="ts">
	import type { PageData } from './$types';
	import type { Socket } from 'socket.io-client';
	import { getContext } from 'svelte';

	const socket: Socket = getContext('socket') as Socket;
	export let data: PageData;

	const { user, match } = data;
	const roomId = match.id;
	const playerID = user.id;
	let result = match.user_matches.find((userMatch) => userMatch.user_id === user.id)?.result;

	let startGame = false;
	let isPlayerTurn = false;

	interface GamePlayers {
		[playerID: string]: {
			playerID: string;
			playerMove: number[];
		};
	}

	let board = Array(9).fill(null);

	$: {
		socket.emit('join', roomId);

		socket.on('joinOrLeaveGame', (playerInRoom: number) => {
			startGame = playerInRoom === 2 ? true : false;
		});

		if (match.finished_at) {
			isPlayerTurn = false;
		} else if (startGame && match.last_player) {
			isPlayerTurn = match.last_player === user.id ? false : true;
		} else {
			isPlayerTurn = match.creator_id === user.id ? true : false;
		}

		socket.on('opponentMove', (cellIndex: number) => {
			board[cellIndex] = 'O';
			isPlayerTurn = true;
		});

		socket.on('lastMove', (cellIndex: number) => {
			board[cellIndex] = 'O';
		});

		socket.on('endGame', (resultMatch) => {
			result =
				resultMatch.player.user_id === user.id
					? resultMatch.player.result
					: resultMatch.opponent.result;
		});

		if (match.moves) {
			const gamePlayers = JSON.parse(match.moves);
			const currentPlayerMoves = gamePlayers[playerID].playerMove;
			const opponentMatch = match.user_matches.find(
				(userMatch) => userMatch.user_id !== user.id,
			);
			const opponentMoves = opponentMatch
				? gamePlayers[opponentMatch.user_id].playerMove
				: [];

			currentPlayerMoves.forEach((cellIndex: number) => (board[cellIndex] = 'X'));
			opponentMoves.forEach((cellIndex: number) => (board[cellIndex] = 'O'));
		}
	}

	function handleClick(cellIndex: number) {
		if (!isPlayerTurn || board[cellIndex]) return;
		board[cellIndex] = 'X';
		isPlayerTurn = false;
		socket.emit('move', { roomId, cellIndex, playerID });
	}
</script>

<div class="flex justify-center items-center h-screen bg-[url('$lib/images/background.png')]"></div>
		<div class="flex flex-col items-center justify-center w-1/2 h-1/2 bg-gray-100 rounded-lg shadow-2xl">
			{#if result !== 'PROGRESS'}
				{#if result === 'WIN'}
					<h1 class="text-3xl font-bold text-center text-blue-600 mb-6">Vous avez gagné !</h1>
				{:else if result === 'LOSE'}
					<h1 class="text-3xl font-bold text-center text-blue-600 mb-6">Vous avez perdu...</h1>
				{:else}
					<h1 class="text-3xl font-bold text-center text-blue-600 mb-6">Match nul</h1>
				{/if}
				<div class="flex flex-col items-center justify-center w-3/4 h-1/4 pb-6">
					<a href="/match/new">
						<button class="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
							Recommencer
						</button>
					</a>
				</div>
			{/if}
			{#if result == 'PROGRESS' && startGame}
				{#if isPlayerTurn}
					<h1 class="text-2xl font-bold text-center text-blue-600 mb-8">C'est à vous de jouer !</h1>
				{:else}
					<h1 class="text-2xl font-bold text-center text-blue-600 mb-8">C'est au tour de votre adversaire...</h1>
				{/if}
			{/if}

			{#if !startGame}
				<p class="text-3xl font-bold text-center text-blue-600">En attente d'un adversaire...</p>
			{:else}
				<div class="flex flex-col items-center justify-center">
					<div class="flex flex-col items-center justify-center">
						<div class="flex flex-wrap w-48">
							{#each board as cell, index}
								<button
									class="w-1/3 h-16 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 text-xl font-bold text-blue-600"
									on:click={() => handleClick(index)}
									disabled={!isPlayerTurn || cell}
								>
									{cell || '-'}
								</button>
							{/each}
						</div>
					</div>
				</div>
			{/if}
		</div>
</div>	
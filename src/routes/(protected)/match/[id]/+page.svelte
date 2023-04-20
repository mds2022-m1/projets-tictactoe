<script lang="ts">
	import type { PageData } from './$types';
	import type { Socket } from 'socket.io-client';
	import { getContext } from 'svelte';

	const socket: Socket = getContext('socket') as Socket;
	export let data: PageData;

	const { user, match } = data;
	const roomId = match.id;
	const playerID = user.id;

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
		
		if (match.finished_at ) {
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
			console.log(resultMatch);
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

<!-- <div> -->
<!-- {#if isGameEnded}
		{#if winner}
			<h1 class="text-2xl font-bold text-blue-600">Vous avez gagné</h1>
		{:else}
			<h1 class="text-2xl font-bold text-blue-600">Vous avez perdu</h1>
		{/if}
	{:else if isPlayerTurn}
		<h1 class="text-2xl font-bold text-blue-600">C'est à vous de jouer</h1>
	{:else}
		<h1 class="text-2xl font-bold text-blue-600">C'est au tour de votre adversaire</h1>
	{/if} -->
<!-- </div> -->

{#if !startGame}
	En attente d'un adversaire
{:else}
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
{/if}

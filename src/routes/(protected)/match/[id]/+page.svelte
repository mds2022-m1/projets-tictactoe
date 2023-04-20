<script lang="ts">
	import type { PageData } from './$types';
	import type { Socket } from 'socket.io-client';
	import { getContext } from 'svelte';

	export let data: PageData;

	interface GamePlayers {
	[playerID: string]: {
	  playerID: string;
	  playerMove: number[];
	};
  }

	const socket: Socket = getContext('socket') as Socket;

	let isPlayerTurn = false;
	const { user, match } = data;
	const playerIDSocket = user.id;



	const userMatch = match.user_matches.find((userMatch) => userMatch.user_id === user.id);

	if (userMatch?.creator) {
		isPlayerTurn = true;
	}

	let board = Array(9).fill(null);
	const roomId = match.id;


	$: {
		socket.emit('join', roomId);

		socket.on('opponentMove', (cellIndex: number) => {
			board[cellIndex] = 'O';
			isPlayerTurn = true;
		});

		socket.on('endGame', (winnerID: string) => {
			if (winnerID === playerIDSocket) {
				alert('You win!');
			} else {
				alert('You lose!');
			}
		});
		
		if (match.moves) {
			const gamePlayers: GamePlayers = JSON.parse(match.moves);
			
			const gamePlayersMe = gamePlayers[playerIDSocket];
			const opponentMatch = match.user_matches.find((userMatch) => userMatch.user_id !== user.id);
			const gamePlayersOpponent = opponentMatch ? gamePlayers[opponentMatch.user_id] : undefined;

			gamePlayersMe.playerMove.forEach((cellIndex: number) => {
				board[cellIndex] = 'X';
			});

			gamePlayersOpponent?.playerMove.forEach((cellIndex: number) => {
				board[cellIndex] = 'O';
			});

			if (match.last_player === playerIDSocket) {
				isPlayerTurn = false;
			} else {
				isPlayerTurn = true;
			}
			if(match.winner_id) {
				isPlayerTurn = false;
			}
		}


	}
	
	function handleClick(cellIndex: number) {
		if (!isPlayerTurn || board[cellIndex]) return;
		board[cellIndex] = 'X';
		isPlayerTurn = false;
		
		console.log('playerIDSocket', playerIDSocket);
		
		socket.emit('move', { roomId, cellIndex, playerIDSocket});
	}
	
</script>
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
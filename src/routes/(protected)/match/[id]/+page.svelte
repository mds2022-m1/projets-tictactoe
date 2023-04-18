<script lang="ts">
	import type { PageData } from './$types';
	import socket from '../../../lib/socket.js';
	import { onDestroy } from 'svelte';

	export let data: PageData;
	let isPlayerTurn = false;

	if (data.match) {
		socket.emit('joinMatch', data.match);
	}
	// let launched = false;
	let launched = true;
	socket.on('matchUpdate', (msg) => {
		// if ((msg.users == 2 && data.match && data.match.user_matches.length === 2) || !data.match) {
		// 	launched = true;
		// }
	});

	// grid
	const grid = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	];

	interface dataPlayerGame {
		user_id: string;
		position: { row: number; col: number };
		grid: Number[][];
	}

	function send(i: number, j: number) {
		if (isPlayerTurn && grid[i][j] === 0 && data.userId) {
			grid[i][j] = 1;
			isPlayerTurn = false;
			const dataPlayer: dataPlayerGame = {
				user_id: data.userId,
				position: { row: i, col: j },
				grid: grid,
			};
			socket.emit('playerMoved', dataPlayer);
		}
	}

	socket.on('playerMoved', (dataPlayer: dataPlayerGame) => {
		if (dataPlayer.user_id !== data.userId) {
			grid[dataPlayer.position.row][dataPlayer.position.col] = 2;
			isPlayerTurn = true;
		}
	});

	// if leave page socket disconnect
	onDestroy(() => {
		socket.disconnect();
		launched = false;
		console.log('disconnect');
	});
</script>

{launched}
<!-- if just one player is connected, display waiting for player 2 -->
{#if !launched}
	<div class="flex flex-col items-center justify-center h-screen">
		<div class="flex items-center space-x-2">
			<svg
				class="animate-spin h-5 w-5 text-gray-600"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle
					class="opacity-25"
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					stroke-width="4"
				/>
				<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
			</svg>
			<span class="text-gray-600">En attente du joueur 2</span>
		</div>
	</div>
{:else if data.match}
	<h1>{data.match.name}</h1>
	<!-- display grid for morpion  witrh svelte and tailwind if cell is clicked display X or O -->
	<div class="grid grid-cols-3 gap-4">
		{#each grid as row, i}
			{#each row as col, j}
				<div
					class="bg-gray-200 p-4 rounded-lg cursor-pointer"
					on:click={() => send(i, j)}
					class:pointer-events-none={!isPlayerTurn || col !== 0}
					class:cursor-auto={col !== 0 && !isPlayerTurn}
				>
					{#if col === 1}
						X
					{:else if col === 2}
						O
					{:else}
						&nbsp;
					{/if}
				</div>
			{/each}
		{/each}
	</div>
{/if}

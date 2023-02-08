<script lang="ts">
	import type { PageData } from './$types';
	import io from 'socket.io-client';

	const socket = io();

	export let data: PageData;

	if (data.match) {
		socket.emit('joinMatch', data.match);
	}

	socket.on('matchUpdate', (msg) => {
		console.log(msg);
	});



</script>

{#if data.match}
	<h1>{data.match.name}</h1>
	<!-- {#if data.match.players}
        {#each data.match.players as player}
            <p>{player.name}</p>
        {/each}
    {/if} -->
{/if}

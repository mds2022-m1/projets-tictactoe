<script lang="ts">
	import type { PageData } from './$types';
	import type { Socket } from 'socket.io-client';
	import { getContext } from 'svelte';

	export let data: PageData;

	const socket: Socket = getContext('socket') as Socket;

	let isPlayerTurn = false;
	const { user, match } = data;

	const userMatch = match.user_matches.find((userMatch) => userMatch.user_id === user.id);

	if (userMatch?.creator) {
		isPlayerTurn = true;
	}

	const roomId = match.id;

	$: {
		socket.emit('join', roomId);
	}
	
</script>

<script lang="ts">
	import type { PageData } from './$types';
	import type { Socket } from 'socket.io-client';
	import { getContext } from 'svelte';

	const socket: Socket = getContext('socket') as Socket;

	export let data: PageData;
	
	const { user, match } = data;
	
	socket.emit('test', 'test');
	
</script>

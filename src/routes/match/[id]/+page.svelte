<script lang="ts">
	import type { PageData } from './$types';
	import io from 'socket.io-client';
    import Chat from './chat.svelte';

    interface Chat {
        name: string;
        speaker: boolean;
        message: string;
    }


    
	const socket = io();

	export let data: PageData;

    let tempo: Chat[] = [];
    tempo.push({name: "test", speaker: true, message: "cc test2"});
    tempo.push({name: "test2", speaker: false, message: "cc test"});

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

<Chat chats={tempo} />

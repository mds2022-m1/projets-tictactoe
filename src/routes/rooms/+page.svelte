<script lang="typescript">
    import { io } from 'socket.io-client';


    const socket = io();


    let roomName: string;

    function onlySpace(str: string) {
        return str.trim().length === 0;
    }


    const handleSubmit = () => {
        // if roomName contains only spaces, etc. then return
        if (!roomName || onlySpace(roomName) ) return;


        socket.emit('joinRoom', roomName);
        console.log(roomName);
        
    }

</script>


<h1 class="text-2xl">
    Create room
</h1>

<div>
    <form on:submit|preventDefault={handleSubmit}>
        <input type="text" placeholder="Nom de room" class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" bind:value={roomName}/>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Create
        </button>
    </form>
</div>
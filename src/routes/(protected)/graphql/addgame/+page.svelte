<script lang="ts">
	import { gql } from '@apollo/client/core';
	import { mutation } from 'svelte-apollo';


	const AddGame = gql`
		mutation AddGame($name: String!) {
			insert_Game_one(object: { name: $name}) {
				name
			}
		}
	`;

	const addGameMutation = mutation(AddGame);

	let name = '';

	async function addGame() {
		if (name == '') {
			return;
		}
		try {
			await addGameMutation({
				variables: { name },
			});
			name = '';
			console.log('Game added');
		} catch (error) {
			// TODO
            console.log(error);
		}
	}
</script>

<form class="formInput" on:submit|preventDefault={addGame}>
	<input
		type="text"
		class="mt-4 px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
		placeholder="Name"
		bind:value={name}
	/>

	<button
		class="mt-4 px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
	>
		Add Game
	</button>
</form>

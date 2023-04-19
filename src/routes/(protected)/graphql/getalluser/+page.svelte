<script lg="ts">
	import { gql } from '@apollo/client/core';
	import { query } from 'svelte-apollo';

	const GetAllUser = gql`
		query GetAllUser {
			User {
				id
				email
				full_name
				pseudo
			}
		}
	`;
	const allUsers = query(GetAllUser);
</script>


<div class="flex flex-col items-center justify-center ">
	<h1 class="text-3xl font-bold mb-8">Afficher tous les utilisateurs</h1>
</div>


{#if $allUsers.data }
	<div class="bg-gray-100 p-6 rounded-lg shadow-md">
		<h2 class="text-2xl font-bold mb-4">Informations utilisateur</h2>
		{#each $allUsers.data.User as user}
			<div class="mb-4">
				<p class="text-gray-600"><span class="font-bold">ID:</span> {user.id}</p>
				<p class="text-gray-600"><span class="font-bold">Email:</span> {user.email}</p>
				<p class="text-gray-600">
					<span class="font-bold">Full Name:</span>
					{user.full_name || 'N/A'}
				</p>
				<p class="text-gray-600">
					<span class="font-bold">Pseudo:</span>
					{user.pseudo || 'N/A'}
				</p>
			</div>
		{/each}
	</div>
{/if}

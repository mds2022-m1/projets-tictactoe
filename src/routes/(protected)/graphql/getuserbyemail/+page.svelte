<script lg="ts">
	import { gql } from '@apollo/client/core';
	import { query } from 'svelte-apollo';

	let email = '';
	const GetUserByEmail = gql`
		query GetUserByEmail($email: String!) {
			User(where: { email: { _like: $email } }) {
				id
				email
				full_name
				pseudo
			}
		}
	`;
	const getUserByEmail = query(GetUserByEmail, {
		variables: {
			email,
		},
	});
	let userData = $getUserByEmail.data;
	$: {
		if (email != '') {
			getUserByEmail.refetch({ email: email + '%' });
			userData = $getUserByEmail.data;
		}else if (email == ''){
			userData = null;
		}
	}
</script>

<div class="flex flex-col items-center justify-center ">
	<h1 class="text-3xl font-bold mb-8">Entrez une adresse email que vous cherchez</h1>
	<input
		type="email"
		class="mt-4 px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
		bind:value={email}
	/>
</div>

{#if userData}
	<div class="bg-gray-100 p-6 rounded-lg shadow-md">
		<h2 class="text-2xl font-bold mb-4">Informations utilisateur</h2>
		{#each userData.User as user}
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

<script lg="ts">
	import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core';
	import { setClient } from 'svelte-apollo';
	import { env } from '$env/dynamic/public';

	const link = new HttpLink({
		uri: env.PUBLIC_GRAPHQL_URL,
		headers: {
			'x-hasura-admin-secret': env.PUBLIC_GRAPHQL_TOKEN,
		},
	});
	const cache = new InMemoryCache();
	const client = new ApolloClient({
		link,
		cache,
	});

	setClient(client);
</script>

<div class="flex justify-center space-x-4">
	<a
		href="/graphql/getalluser"
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
	>
		Get All User
	</a>
	<a
		href="/graphql/getuserbyemail"
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
	>
		Get User By Email
	</a>
</div>

<slot />

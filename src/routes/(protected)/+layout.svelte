<script lang="ts">
	import socket from '$root/lib/socket.js';
	import { setContext } from 'svelte';
	import { page } from '$app/stores';

	setContext('socket', socket);

	const { user } = $page.data;

	function setCookie(name: string, value: string, days: number) {
		const dateExpiration = new Date();
		dateExpiration.setTime(dateExpiration.getTime() + days * 24 * 60 * 60 * 1000);
		document.cookie = `${name}=${value};expires=${dateExpiration.toUTCString()};path=/`;
	}

	function getCookie(name: string) {
		const cookieArr = document.cookie.split(';');
		for (let i = 0; i < cookieArr.length; i++) {
			let cookie = cookieArr[i];
			while (cookie.charAt(0) === ' ') {
				cookie = cookie.substring(1);
			}
			if (cookie.indexOf(name) === 0) {
				return cookie.substring(name.length + 1, cookie.length);
			}
		}
		return '';
	}

	import { onMount } from 'svelte';

	onMount(() => {
		const sessionID = getCookie('sessionID');

		socket.auth = {
			username: user.email,
			userID: user.id,
			...(sessionID && { sessionID }),
		};

		socket.connect();
	});

	socket.on('session', ({ sessionID, userID }) => {
		socket.auth = { sessionID };
		setCookie('sessionID', sessionID, 1);
		socket.userID = userID;
	});



		// import ApolloClient
		import { ApolloClient } from "@apollo/client/core";
	// import HttpLink 
	import { HttpLink } from "@apollo/client/link/http";
	// import InMemoryCache
	import { InMemoryCache } from "@apollo/client/cache";
import { setClient } from "svelte-apollo";

 export let authToken = "SvFcmI2Uv9m9XL3C00aYfJ5y9xRWkR9f8TizKeZaBr288t1VXXwQDGVKn3Wndh7n";

 const client = createApolloClient(authToken);
 setClient(client);

function createApolloClient(authToken) {
  const link = new HttpLink({
    uri: "https://pro-ewe-96.hasura.app/v1/graphql",
    headers: {
		'x-hasura-admin-secret': authToken,
    },
  });
  const cache = new InMemoryCache();
  const client = new ApolloClient({
    link,
    cache,
  });
  return client;
}
</script>

<!-- child -->
<slot />

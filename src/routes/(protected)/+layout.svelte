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
</script>


<!-- child -->
<slot />

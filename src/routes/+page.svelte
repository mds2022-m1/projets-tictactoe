<script>
	let username = '';
	// function login for add username in cookie
	function login() {
		//  add username in cookie with 1 day expiration
        document.cookie = `username=${username}; max-age=86400`;
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<!-- input type texte and button for login -->
<div>
	<input type="text" id="username" placeholder="username" bind:value={username} />
	<button on:click={login}>Login</button>
</div>

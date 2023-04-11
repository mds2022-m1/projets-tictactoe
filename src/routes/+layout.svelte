<script>
	import '../app.css';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>SvelteKit Authentification</title>
</svelte:head>

<nav>
	<header class="bg-gray-800 text-white flex justify-between items-center px-4 py-3">
		<div class="flex items-center">
			<a href="#" class="font-bold text-xl">Tictactoe</a>
		</div>
		<div class="flex items-center">
			{#if !$page.data.user}
				<a href="/login" class="mx-3 hover:text-gray-400">Connexion</a>
				<a href="/register" class="mx-3 hover:text-gray-400">Inscription</a>
			{/if}
		</div>
	</header>
</nav>

<main>
	<slot />
</main>

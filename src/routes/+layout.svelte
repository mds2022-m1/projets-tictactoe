<script>
	import '../app.css';
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>SvelteKit Authentification</title>
</svelte:head>

<nav>
	<header class="bg-gray-800 text-white flex justify-between items-center px-4 py-3">
		<div class="flex items-center">
			<a href="/" class="font-bold text-xl">Tictactoe</a>
		</div>
		<div class="flex items-center">
			{#if !$page.data.user}
				<a href="/login" class="mx-3 hover:text-gray-400">Connexion</a>
				<a href="/register" class="mx-3 hover:text-gray-400">Inscription</a>
			{/if}

			{#if $page.data.user}
				<a href="/match/history" class="mx-3 hover:text-gray-400">Historique</a>
				<a href="/match/new">Créer une partie</a>
				<form
					class="logout mx-3 hover:text-gray-400"
					action="/logout"
					method="POST"
					use:enhance={() => {
						return async ({ result }) => {
							invalidateAll();
							await applyAction(result);
						};
					}}
				>
					<button type="submit">Déconnexion</button>
				</form>
			{/if}
		</div>
	</header>
</nav>

<main>
	<slot />
</main>

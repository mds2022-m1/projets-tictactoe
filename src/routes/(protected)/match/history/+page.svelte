<script lang="ts">
	import ResultMatch from '$lib/components/ResultMatch.svelte';
	import type { PageData } from './$types';
	import { page } from '$app/stores';

	export let data: PageData;
	const { user } = $page.data;

	let diplay = 'all';
	let filteredMatch = data.props.matchPlayed;

	const onChange = () => {
		filteredMatch = data.props.matchPlayed.filter((matchPlayed) => {
			if (diplay == 'all') {
				return matchPlayed;
			} else if (diplay == 'win') {
				return matchPlayed.result == 'WIN';
			} else if (diplay == 'lose') {
				return matchPlayed.result == 'LOSE';
			} else if (diplay == 'inProgress') {
				return matchPlayed.result == 'PROGRESS';
			} else if (diplay == 'equality') {
				return matchPlayed.result == 'EQUALITY';
			}
		});
	};
</script>

<div class="bg-white">
	<h1 class="text-3xl mb-4 text-center">Historique des matchs</h1>

	{#if data.props.matchPlayed == null}
		<p class="text-center text-xl">Vous n'avez pas encore joué de match</p>
	{:else}
		<!-- display 5 inout toggle 'Tous', 'Gagnés', 'Perdus', 'En cours', 'Egalité' -->
		<div class="mb-4 flex justify-center">
			<label for="matchPlayed" class="mr-2">Afficher</label>
			<select
				name="matchPlayed"
				id="matchPlayed"
				class="border border-gray-300 rounded px-2 py-1"
				bind:value={diplay}
				on:change={onChange}
			>
				<option value="all">Tous</option>
				<option value="win">Gagnés</option>
				<option value="lose">Perdus</option>
				<option value="inProgress">En cours</option>
				<option value="equality">Égalité</option>
			</select>
		</div>

		<div class="flex flex-wrap">
			{#each filteredMatch as matchPlayed}
				<div class="w-full p-2">
					<ResultMatch {matchPlayed} match={matchPlayed.match} {user} />
				</div>
			{/each}
		</div>
	{/if}
</div>

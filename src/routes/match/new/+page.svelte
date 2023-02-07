<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	export let form: any;

	
</script>

<form method="POST" autocomplete="off">
	<div class="flex flex-col items-center justify-center h-screen">
		<div class="flex flex-col items-center justify-center w-1/2 h-1/2 bg-gray-200 rounded-lg">
			<div class="flex flex-row items-center justify-center w-full h-full">
				{#if data.props.games}
					{#each data.props.games as game}
						<div class="flex flex-col items-center justify-center w-1/2 h-full">
							<input
								name="game_id"
								type="radio"
								value={game.id}
								class="w-1/2 h-1/2"
							/>
							<label for="game">{game.name}</label>
						</div>
					{/each}
				{/if}
			</div>

			{#if form?.error.game_id}
				<p class="text-red-500">{form.error.game_id}</p>
			{/if}

			<div class="flex flex-col items-center justify-center w-3/4 h-3/4">
				<div class="flex flex-col items-center justify-center w-full h-1/2">
					<input
						name="name"
						type="text"
						class="w-3/4 h-1/2 border-2 border-gray-300 rounded-lg"
						placeholder="Nom du match"
					/>
					{#if form?.error.name}
						<p class="text-red-500">{form.error.name}</p>
					{/if}
				</div>
			</div>
			<div class="flex flex-col items-center justify-center w-3/4 h-1/4">
				<button class="w-3/4 h-1/2 bg-blue-500 rounded-lg" type="submit"
					>Créer le match</button
				>
			</div>
		</div>
	</div>
</form>

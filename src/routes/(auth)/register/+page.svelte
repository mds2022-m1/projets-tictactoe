<script lang="ts">
	import { enhance } from '$app/forms';

	export let form;
</script>

<div class="bg-gray-200">
	<div class="flex justify-center items-center h-screen">
		<div class="w-full max-w-md">
			<form
				class="bg-white shadow-md rounded px-8 py-6"
				action="?/register"
				method="POST"
				use:enhance
			>
				<h2 class="text-gray-800 text-2xl font-bold mb-6 text-center">Créer un compte</h2>
				<div class="mb-4">
					<label class="block text-gray-700 font-bold mb-2" for="email"> Email </label>
					<input
						class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="email"
						name="email"
						placeholder="Entrer votre email"
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 font-bold mb-2" for="password">
						Mot de passe
					</label>
					<input
						class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
						name="password"
						placeholder="Entrer votre mot de passe"
					/>
				</div>
				{#if form?.user}
					<p class="error">L'utilisateur existe déjà.</p>
				{/if}
				<div class="flex items-center justify-between">
					<button
						class="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Créer un compte
					</button>
				</div>
				<br>
				<p class="error">Si vous avez déjà un compte, veuillez vous <a href="/login" class="font-bold">connecter ici.</a></p>
			</form>
		</div>
	</div>
</div>

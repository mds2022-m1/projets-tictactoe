<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';

	export let form;
</script>

<!-- <h1>Login</h1>

<form
	action="?/login"
	method="POST"
	use:enhance={() => {
		return async ({ result }) => {
			// rerun the `load` function for the page
			// https://kit.svelte.dev/docs/modules#$app-navigation-invalidateall
			invalidateAll()

			// since we're customizing the default behaviour
			// we don't want to reimplement what `use:enhance` does
			// so we can use `applyResult` and pass the `result`
			await applyAction(result)
		}
	}}
>
	<div>
		<label for="email">email</label>
		<input id="email" name="email" type="email" required />
	</div>

	<div>
		<label for="password">Password</label>
		<input id="password" name="password" type="password" required />
	</div>

	{#if form?.invalid}
		<p class="error">Username and password is required.</p>
	{/if}

	{#if form?.credentials}
		<p class="error">You have entered the wrong credentials.</p>
	{/if}

	<button type="submit">Log in</button>
</form> -->

<div>
	<div class="flex justify-center items-center h-screen">
		<div class="w-full max-w-md">
			<form
				class="bg-white shadow-2xl rounded px-8 py-6 my-6"
				action="?/login"
				method="POST"
				use:enhance={() => {
					return async ({ result }) => {
						// rerun the `load` function for the page
						// https://kit.svelte.dev/docs/modules#$app-navigation-invalidateall
						invalidateAll();

						// since we're customizing the default behaviour
						// we don't want to reimplement what `use:enhance` does
						// so we can use `applyResult` and pass the `result`
						await applyAction(result);
					};
				}}
			>
				<h2 class="text-gray-800 text-2xl font-bold mb-6 text-center">Connexion</h2>
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
				{#if form?.invalid}
					<p class="error">Email et mot de passe sont requis.</p>
				{/if}

				{#if form?.credentials}
					<p class="error">Vous avez entré les mauvais identifiants.</p>
				{/if}
				<div class="flex items-center justify-between">
					<button
						class="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Connexion
					</button>
				</div>
				<br>
				<p class="error">Si vous n'avez pas encore de compte, vous pouvez en <a href="/register" class="font-bold">créer un ici.</a></p>
			</form>
		</div>
	</div>
</div>



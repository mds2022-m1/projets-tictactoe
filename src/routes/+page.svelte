<script>
	import welcome from '$lib/images/tictactoe.webp';
	import welcome_fallback from '$lib/images/tictactoe.png';
</script>

<svelte:head>
	<title>Accueil</title>
	<meta name="description" content="Svelte app" />
</svelte:head>

<section>
	<span class="welcome">
		<picture>
			<source srcset={welcome} type="image/webp" />
			<img src={welcome_fallback} alt="Welcome" />
		</picture>
	</span>
	<h1>Bienvenue sur cette application ! <br/>
		Veuillez vous connecter afin de commencer à jouer.
	</h1>
	<br/>
	<a href="/login">
		<button class="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
			Connexion
		</button>
	</a>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
        text-align: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
		font-size: 22px;
		font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        margin-top: 100px;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
        margin-top: 80px;
		width: 50%;
	}

    .welcome picture {
        display: flex;
        justify-content: center;
        align-items: center;
	}
</style>

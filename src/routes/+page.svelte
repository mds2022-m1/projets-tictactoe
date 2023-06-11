<script>
	import welcome from '$lib/images/tictactoe.webp';
	import welcome_fallback from '$lib/images/tictactoe.png';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Accueil</title>
	<meta name="description" content="Svelte app" />
</svelte:head>

	<section class="bg-gray-100 shadow-2xl rounded px-8 py-5 flex flex-col items-center justify-center h-screen">
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>
		{#if !$page.data.user}
			<h1>Bienvenue sur le jeu du Tic Tac Toe ! <br/>
				Veuillez vous connecter pour commencer à jouer.
			</h1>
			<br/>
			<a href="/login">
				<button class="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
					Se connecter
				</button>
			</a>
		{/if}
		{#if $page.data.user}
			<h1>Bienvenue sur le jeu du Tic Tac Toe ! <br/>
				Vous pouvez créer un match à tout moment.
			</h1>
			<br/>
			<a href="/match/new">
				<button class="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
					Créer un match
				</button>
			</a>
		{/if}
	</section>

<style>
	
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex: 0.6;
		text-align: center;
		align-items: center;
		height: 370px;
		width: 700px;
	}

	h1 {
		width: 100%;
		font-size: 22px;
		font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        margin-top: 160px;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		padding: 0 0 calc(100% * 495 / 2048) 0;
		margin-top: -20px;
		margin-bottom: -180px;
	}

	picture{
		height: 20px;
	}

	.welcome img {
        margin-top: 80px;
	}

    .welcome picture {
        display: flex;
        justify-content: center;
        align-items: center;
	}

	:global(body){
		height: 150%;
        background-image: url("https://images.squarespace-cdn.com/content/v1/5a2613f6be42d61192e3e478/1582999868688-PEVK3HU4FN1D9V5UDM4K/Screen+Shot+2020-02-29+at+1.07.46+PM.png");
    }
</style>

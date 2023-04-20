<script>
	import welcome from '$lib/images/tictactoe.webp';
	import welcome_fallback from '$lib/images/tictactoe.png';
</script>

<svelte:head>
	<title>Accueil</title>
	<meta name="description" content="Svelte app" />
</svelte:head>

	<section class="bg-white shadow-md rounded px-8 py-5">
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>
		<h1>Bienvenue sur le jeu du Tic Tac Toe ! <br/>
			Veuillez vous connecter afin de commencer à jouer.
		</h1>
		<br/>
		<a href="/login">
			<button class="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
				Se connecter
			</button>
		</a>
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
		margin-top: 125px;
		margin-left: 380px;
	}

	div{
		background-color: white;
		height: 80%;
		width: 50%;
		margin-top: 150px;
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
		height: 100%;
        background-image: url("https://images.squarespace-cdn.com/content/v1/5a2613f6be42d61192e3e478/1582999868688-PEVK3HU4FN1D9V5UDM4K/Screen+Shot+2020-02-29+at+1.07.46+PM.png");
    }
</style>

<script>
	import { page } from '$app/stores';
	import github from '/src/images/github.svg';``
    import account from '/src/images/account.svg';

</script>

<header>
	<div class="corner">
		<a href="https://github.com/">
			<img src={github} alt="GitHub" />
		</a>
	</div>

	<nav class="mt-3 flex justify-center space-x-4">
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">ACCUEIL</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/tictactoe') ? 'page' : undefined}>
				<a href="/tictactoe" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">TICTACTOE</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">À PROPOS</a>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<a href="">
			<img src={account} alt="Account" />
		</a>
	</div>
	
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}
</style>
<div class="corner">
	<a href="https://github.com/sveltejs/kit">
		<img src={github} alt="GitHub" />
	</a>
</div>
<nav>
	<svg viewBox="0 0 2 3" aria-hidden="true">
	    <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
	</svg>
	<ul>
		<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
		    <a href="/">Accueil</a>
		</li>
		<li aria-current={$page.url.pathname.startsWith('/tictactoe') ? 'page' : undefined}>
			<a href="/tictactoe">TicTacToe</a>
		</li>
		<li aria-current={$page.url.pathname === '/About' ? 'About' : undefined}>
			<a href="/About">À Propos</a>
		</li>
	</ul>
	<svg viewBox="0 0 2 3" aria-hidden="true">
	    <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
	</svg>
</nav>
<div class="corner">
	<a href="">
    	<img src={account} alt="Account" />
	</a>
</div>
<script>
	// get message_div from page.ts
	import { messageDiv, test } from './page';
</script>

<button on:click={test}>join</button>

<h1>Test websocket</h1>

<div>{messageDiv}</div>

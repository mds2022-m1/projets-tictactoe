<script lang="ts">
	import type { PageData } from './$types';


	export let data: PageData;
	
	const { user, match } = data;
	
	
</script>

{JSON.stringify(data)}
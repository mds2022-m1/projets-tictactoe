<script lang="ts">
</script>

<form method="POST" autocomplete="off"> 
	<div class="flex flex-col items-center justify-center h-screen">
		<div class="flex flex-col items-center justify-center w-1/2 h-1/2 bg-gray-200 rounded-lg">
			<div class="flex flex-col items-center justify-center w-3/4 h-3/4">
				<div class="flex flex-col items-center justify-center w-full h-1/2">
					<input
						name="nameMatch"
						type="text"
						class="w-3/4 h-1/2 border-2 border-gray-300 rounded-lg"
						placeholder="Nom du match"
					/>
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

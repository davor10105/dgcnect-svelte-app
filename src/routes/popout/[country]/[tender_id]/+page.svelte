<script>
	export let data;
</script>

<div class="localExplainability">
	<div class="tokenImportance">
		<h2 class="subtitle">Token Importance</h2>
		<p>
			{#each data.tender_details.WordScores as wordScore, index}
				<span
					style="background-color: {wordScore[1] > 0
						? `rgba(255, 0, 0,${Math.min(1, wordScore[1])})`
						: wordScore[1] < 0
						? `rgba(0, 0, 255,${-Math.max(-1, wordScore[1])})`
						: 'rgba(0, 0, 0, 0)'};"
					>{wordScore[0]}
				</span>
			{/each}
		</p>
	</div>
</div>

<style>
	.localExplainability {
		display: flex;
		flex-direction: row;
	}

	.tokenImportance {
		margin: 20px;
		background-color: white;
		padding: 50px;
		padding-top: 20px;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		border-radius: 10px;
	}

	.subtitle {
		font-size: 24px;
		color: grey;
		text-align: center;
		margin-bottom: 10px;
	}
</style>

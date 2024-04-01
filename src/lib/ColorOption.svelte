<script lang="ts">
	export let label: string;
	export let color = "";
	export let value: number;
	export let group_value: number;
	export let group_name: string;
</script>

<label class="color-option">
	<input type="radio" {value} name={group_name} bind:group={group_value} />
	{#if color}
		<div class="color" style="background-color: {color}"></div>
	{/if}
	<div>{label}</div>
</label>

<style lang="scss">
	.color-option {
		user-select: none;
		height: 3rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		border-radius: var(--br);
		&:has(input:checked) {
			background-color: var(--bg-2);
		}
	}
	.color {
		height: 2rem;
		aspect-ratio: 1;
		border-radius: 50%;
	}
	input {
		display: none;
	}
</style>

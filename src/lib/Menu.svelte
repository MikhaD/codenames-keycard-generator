<script lang="ts">
	export let disabled = false;
	export let open = !disabled;

	$: if (disabled) open = false;
</script>

<section data-disabled={disabled} data-open={open}>
	<button
		class="close"
		on:click={() => {
			if (!disabled) open = !open;
		}}
	></button>
	<slot />
</section>

<style lang="scss">
	section {
		background-color: var(--bg-1);
		display: flex;
		flex-direction: column;
		gap: 2rem;
		height: 100vh;
		width: max(30vw, 40rem);
		position: relative;
		padding: 2rem;
		transition:
			transform 0.25s 0.1s ease-in-out,
			width 0.25s ease-in-out;
	}
	.close {
		padding: 0;
		border: none;
		background-color: inherit;
		width: 5rem;
		aspect-ratio: 1;
		position: absolute;
		top: 0;
		left: 0;
		transform: translateX(-100%);
		border-radius: var(--br) 0 0 var(--br);
		cursor: not-allowed;
		overflow: hidden;
	}
	.close::before,
	.close::after {
		transition:
			transform 0.25s 0.1s ease-in-out,
			box-shadow 0.25s ease-in-out;

		position: absolute;
		content: "";
		width: 70%;
		height: 0.5rem;
		background-color: var(--fg-0);
		z-index: 1;
		inset: 0 0 0 0;
		margin: auto;
	}
	.close::before {
		box-shadow: -15rem 1.25rem var(--fg-0);
		transform: rotate(45deg);
	}
	.close::after {
		transform: rotate(-45deg);
	}
	[data-disabled="false"] {
		.close {
			cursor: pointer;
		}
	}
	[data-open="false"] {
		transform: translateX(100%);
		width: 0;
		transition:
			transform 0.25s ease-in-out,
			width 0.25s 0.1s ease-in-out;

		.close::before,
		.close::after {
			transition:
				transform 0.25s ease-in-out,
				box-shadow 0.25s 0.15s ease-in-out;
		}
		.close::before {
			transform: translateY(-250%);
			box-shadow: 0 1.25rem var(--fg-0);
		}
		.close::after {
			transform: translateY(250%);
		}
	}
	@media (max-width: 875px) {
		section {
			position: absolute;
			inset: 0;
			width: 100%;
			padding-top: 4rem;
		}
		[data-open="true"] {
			.close {
				transform: initial;
				background-color: transparent;
				margin: 1rem;
				width: 3rem;
			}
		}
		[data-open="false"] {
			width: 100%;
		}
	}
</style>

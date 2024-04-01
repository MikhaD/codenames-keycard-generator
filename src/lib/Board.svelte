<script lang="ts">
	import { generateBoard, Team, Teams } from "../utils";

	export let teams: Team[];
	export let size: number;
	export let team_size: number;
	export let seed: number;
	export let starting_team = 0;

	$: board = generateBoard(size, teams.length, team_size, seed, starting_team);
	$: amended_teams = [Teams.bystander, ...teams, Teams.assassin];
</script>

<div class="board">
	{#if starting_team > 0}
		<div
			class="starting-indicator inline left"
			style="background-color: {amended_teams[starting_team].color}"
		></div>
		<div
			class="starting-indicator inline right"
			style="background-color: {amended_teams[starting_team].color}"
		></div>
		<div
			class="starting-indicator block top"
			style="background-color: {amended_teams[starting_team].color}"
		></div>
		<div
			class="starting-indicator block bottom"
			style="background-color: {amended_teams[starting_team].color}"
		></div>
	{/if}
	{#each Array(size) as _, i}
		<div class="row">
			{#each Array(size) as _, j}
				{@const index = i * size + j}
				<div class="tile" style="background-color: {amended_teams.at(board[index])?.color}">
					<svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d={amended_teams.at(board[index])?.icon} />
					</svg>
				</div>
			{/each}
		</div>
	{/each}
</div>

<style lang="scss">
	.board {
		font-size: clamp(0.5rem, 1.4vw, 1rem);
		position: relative;
		border-radius: 2em;
		border: solid 0.3em #6b5449;
		--padding: 2em;
		--gap: 1em;
		background-color: black;
		padding: var(--padding);
		padding-bottom: calc(var(--padding) - var(--gap));
		margin: 7em;
		&::before,
		&::after {
			content: "";
			position: absolute;
			display: block;
			width: calc(100% + var(--scale) * var(--padding));
			aspect-ratio: 1;
			inset: 0;
			border-radius: inherit;
			transform: translate(
				calc(var(--scale) / -2 * var(--padding)),
				calc(var(--scale) / -2 * var(--padding))
			);
		}
		&::before {
			--scale: 3;
			z-index: -1;
			border: inherit;
			background-color: #a88573;
		}
		&::after {
			--scale: 6;
			z-index: -2;
			background-color: #c8ab99;
		}
	}
	.tile {
		display: inline-block;
		width: 5em;
		aspect-ratio: 1;
		border-radius: var(--br);
		display: grid;
		place-items: center;
		svg {
			width: 70%;
			height: 70%;
		}
	}
	path {
		stroke: white;
		opacity: 0.5;
		stroke-width: 5;
		stroke-linejoin: round;
		stroke-linecap: round;
	}
	.row {
		margin-bottom: 1em;
		display: flex;
		gap: var(--gap);
	}
	.starting-indicator {
		--thin: 2em;
		--thick: 7em;
		position: absolute;
		--offset: calc(-1 * (var(--thin) / 2 + 2em));
		display: grid;
		place-items: center;
		&::before {
			content: "";
			width: 30%;
			height: 30%;
			background-color: white;
			filter: blur(0.4em);
		}
		&.inline {
			top: 50%;
			transform: translateY(-50%);
			height: var(--thick);
			width: var(--thin);
		}
		&.block {
			height: var(--thin);
			width: var(--thick);
			transform: translateX(-50%);
			left: 50%;
		}
		&.top {
			top: var(--offset);
		}
		&.bottom {
			bottom: var(--offset);
		}
		&.left {
			left: var(--offset);
		}
		&.right {
			right: var(--offset);
		}
	}
</style>

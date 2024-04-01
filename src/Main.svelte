<script lang="ts">
	import Board from "./lib/Board.svelte";
	import ColorOption from "./lib/ColorOption.svelte";
	import Info from "./lib/Info.svelte";
	import Menu from "./lib/Menu.svelte";
	import { type SaveData, Teams } from "./utils";

	export let frozen: boolean;
	export let num_teams: number;
	export let seed: number;
	export let board_size: number;
	export let team_size: number;
	export let starting_team: number;

	$: if (frozen) {
		document.location.hash = btoa(
			JSON.stringify({
				num_teams: num_teams,
				board_size: board_size,
				team_size: team_size,
				seed: seed,
				starting_team: starting_team,
			} as SaveData),
		);
	} else {
		document.location.hash = "";
	}

	$: teams = Teams.get_players(num_teams);
	$: if (starting_team > num_teams) starting_team = 0;
</script>

<main>
	<section class="board">
		<Board {teams} size={board_size} {team_size} {seed} {starting_team} />
		{#if frozen}
			<div>Unfreeze to generate new board or change settings</div>
		{:else}
			<button id="generate" on:click={() => (seed = Date.now())}>Generate New Board</button>
			<br />
		{/if}
		<label for="freeze">
			<input bind:checked={frozen} type="checkbox" name="freeze" id="freeze" on:click />
			Freeze Board
			<Info
				info="Freezing the board prevents modifications and stops the board from changing if the page is reloaded"
			/>
		</label>
	</section>
	<Menu disabled={frozen}>
		<h3>Changing Settings will regenerate the board</h3>
		<label>
			Board Size
			<input type="number" bind:value={board_size} />
		</label>
		<label>
			Tiles per Team
			<input type="number" bind:value={team_size} />
		</label>
		<div class="num-teams">
			<span>Number of teams</span>
			<div>
				<label>
					<input type="radio" name="two" value={2} bind:group={num_teams} />
					Two
				</label>
				<label>
					<input type="radio" name="three" value={3} bind:group={num_teams} />
					Three
				</label>
				<label>
					<input type="radio" name="four" value={4} bind:group={num_teams} />
					Four
				</label>
			</div>
		</div>
		<div class="starting-team">
			<span>Starting Team <Info info="The starting team has one extra tile to guess" /></span>
			{#each teams as team, i}
				<ColorOption
					label="{team.name} Team"
					color={team.color}
					value={i + 1}
					group_name="starting-team"
					bind:group_value={starting_team}
				/>
			{/each}
			<ColorOption
				label="No Starting Team"
				value={0}
				group_name="starting-team"
				bind:group_value={starting_team}
			/>
		</div>
	</Menu>
</main>

<style lang="scss">
	main {
		display: flex;
		overflow: hidden;
		height: 100%;
	}
	.board {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	input[type="number"] {
		width: 100%;
		border-radius: var(--br);
		padding: 0.5rem;
		border: none;
	}
	h3 {
		text-align: center;
		margin: 0;
	}
	.num-teams div {
		display: flex;
		gap: 2rem;
	}
	.starting-team {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>

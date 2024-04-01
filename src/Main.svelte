<script lang="ts">
	import Board from "./lib/Board.svelte";
	import ColorOption from "./lib/ColorOption.svelte";
	import Info from "./lib/Info.svelte";
	import Menu from "./lib/Menu.svelte";
	import NumberPicker from "./lib/NumberPicker.svelte";
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
			<div class="generate">Unfreeze to generate new board or change settings</div>
		{:else}
			<button class="generate" on:click={() => (seed = Date.now())}>Generate New Board</button
			>
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
	<Menu disabled={frozen} open={false}>
		<h3>Changing Settings will regenerate the board</h3>
		<div>
			<span>Board Size</span>
			<NumberPicker
				bind:value={board_size}
				max={10}
				min={Math.ceil(Math.sqrt(num_teams * team_size + 1 + Number(starting_team > 0)))}
			></NumberPicker>
		</div>
		<div>
			<span>Tiles per Team</span>
			<NumberPicker
				bind:value={team_size}
				max={Math.floor((board_size ** 2 - 1 - Number(starting_team > 0)) / num_teams)}
			></NumberPicker>
		</div>
		<div class="num-teams">
			<span>Number of teams</span>
			<NumberPicker
				bind:value={num_teams}
				max={Math.min(
					Math.floor((board_size ** 2 - 1 - Number(starting_team > 0)) / team_size),
					4,
				)}
				min={2}
			></NumberPicker>
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
		<p>
			If you cannot increase or decrease a value make sure the board can accommodate the
			values you are attempting to set.
		</p>
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
	h3 {
		text-align: center;
		margin: 0;
	}
	.starting-team {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.generate {
		height: 4.5rem;
		margin-bottom: 1rem;
	}
</style>

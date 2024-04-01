<script lang="ts">
    import Main from "./Main.svelte";
    import { hasKeys } from "./utils";

    const save_data_keys = ["num_teams", "board_size", "team_size", "seed", "starting_team"];
    let num_teams = 2;
    let seed = Date.now();
    let board_size = 5;
    let team_size = 8;
    let starting_team = 1;

    async function loadBoard() {
        const hash = document.location.hash.slice(1);
        try {
            const data = JSON.parse(atob(hash));
            for (const key of save_data_keys) {
                if (!hasKeys(data, save_data_keys)) {
                    throw new Error("Invalid data");
                }
                num_teams = data.num_teams;
                seed = data.seed;
                board_size = data.board_size;
                team_size = data.team_size;
                starting_team = data.starting_team;
            }
        } catch (e) {
            document.location.hash = "";
            return false;
        }
        return true;
    }

    let frozen_promise = loadBoard();
</script>

{#await frozen_promise}
    <h1>Loading ...</h1>
{:then frozen}
    <Main {frozen} {num_teams} {seed} {board_size} {team_size} {starting_team}></Main>
{/await}

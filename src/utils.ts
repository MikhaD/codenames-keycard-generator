export function generateBoard(size: number, teams: number, teamSize: number, seed = 0, startingTeam?: number) {
	const board = Array.from({ length: size * size }, () => 0);
	const generator = new UniqueRandom(0, size * size - 1, seed);
	for (let i = 0; i < teams; i++) {
		for (let j = 0; j < teamSize; j++) {
			board[generator.next()] = i + 1;
		}
	}
	if (startingTeam && startingTeam <= teams) {
		board[generator.next()] = startingTeam;
	}
	// Add the assassin
	board[generator.next()] = -1;
	return board;
}

export class UniqueRandom {
	private options: number[];
	private random: SeededRandom;

	/**
	 * A class to generate unique (non-repeating) pseudo random numbers within a range
	 * @param min - The minimum value to generate (inclusive)
	 * @param max - The maximum value to generate (inclusive)
	 * @param seed - The seed to use for the random number generator
	 */
	constructor(min: number, max: number, seed: number) {
		this.options = Array.from({ length: max - min + 1 }, (_, i) => i + min);
		this.random = new SeededRandom(seed);
	}

	/**
	 * @returns The next unique random number
	 * @throws {RangeError} - If there are no more unique values to generate
	 */
	next() {
		if (this.options.length == 0) throw new RangeError("No more unique values");
		const index = this.random.next(0, this.options.length);
		return this.options.splice(index, 1)[0];
	}
}


export class SeededRandom {
	private seed: number;

	/**
	 * A simple implementation of a seeded pseudo random number generator using the Lehmer
	 * (Park-Miller) method
	 * @param seed - The seed to use for the random number generator
	 */
	constructor(seed: number) {
		this.seed = seed % 2147483647;
		if (this.seed <= 0) this.seed += 2147483646;
	}

	/**
	 * @returns A pseudo random number between min and max
	 * @param min - The minimum value to generate (inclusive). Defaults to 0
	 * @param max - The maximum value to generate (exclusive). Defaults to 2147483647
	 */
	next(min = 0, max = 2147483647) {
		this.seed = (this.seed * 16807) % 2147483647;
		return min + (this.seed) % (max - min);
	}

	nextFloat() {
		return (this.next() - 1) / 2147483646;
	}
}

export class Team {
	public readonly color: string;
	public readonly icon: string;
	public readonly name: string;

	constructor(name: string, color: string, symbol: string) {
		this.name = name;
		this.color = color;
		this.icon = symbol;
	}
}

export interface SaveData {
	seed: number;
	num_teams: number;
	team_size: number;
	board_size: number;
	starting_team: number;
}

/**
 * Check if an object has all the given keys
 * @param obj - The object to check
 * @param keys - The keys to check for
 */
export function hasKeys(obj: any, keys: string[]): obj is SaveData {
	return keys.every(key => key in obj);
}

export const Teams = {
	bystander: new Team("bystander", "#D7C69F", ""),
	assassin: new Team("assassin", "#404040", "M13.314 13.3137L24.6277 24.6274M24.6277 24.6274L35.9414 35.9411M24.6277 24.6274L13.314 35.9411M24.6277 24.6274L35.9414 13.3137"),
	players: [
		new Team("Red", "#B33038", "M5.46447 28.0919C3.51184 26.1393 3.51184 22.9734 5.46447 21.0208L21.0208 5.46447C22.9734 3.51184 26.1393 3.51184 28.0919 5.46447L43.6482 21.0208C45.6009 22.9734 45.6009 26.1393 43.6482 28.0919L28.0919 43.6482C26.1393 45.6009 22.9734 45.6009 21.0208 43.6482L5.46447 28.0919Z"),
		new Team("Blue", "#288DC9", "M13.6863 36.3137C7.4379 30.0653 7.4379 19.9347 13.6863 13.6863C19.9347 7.4379 30.0653 7.4379 36.3137 13.6863C42.5621 19.9347 42.5621 30.0653 36.3137 36.3137C30.0653 42.5621 19.9347 42.5621 13.6863 36.3137Z"),
		new Team("Green", "#2A9034", "M8.62744 13.6274C8.62744 10.866 10.866 8.62744 13.6274 8.62744H35.6274C38.3889 8.62744 40.6274 10.866 40.6274 13.6274V35.6274C40.6274 38.3889 38.3889 40.6274 35.6274 40.6274H13.6274C10.866 40.6274 8.62744 38.3889 8.62744 35.6274V13.6274Z"),
		new Team("Orange", "#DA781F", "M20.8017 12.5C22.7262 9.16667 27.5374 9.16667 29.4619 12.5L41.5863 33.5C43.5108 36.8333 41.1052 41 37.2562 41H13.0075C9.15846 41 6.75283 36.8333 8.67733 33.5L20.8017 12.5Z"),
	],
	get_players: function(num: number) {
		return this.players.slice(0, num);
	}
};
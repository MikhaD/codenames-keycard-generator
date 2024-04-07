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
	assassin: new Team("assassin", "#404040", "M13.687 13.686L25 25m0 0l11.314 11.314M25 25L13.687 36.314M25 25l11.314-11.314"),
	players: [
		new Team("Red", "#B33038", "M5.908 28.536a5 5 0 0 1 0-7.071L21.465 5.908a5 5 0 0 1 7.071 0l15.556 15.556a5 5 0 0 1 0 7.071L28.536 44.092a5 5 0 0 1-7.071 0L5.908 28.536z"),
		new Team("Blue", "#288DC9", "M13.686 36.314c-6.248-6.248-6.248-16.379 0-22.627s16.379-6.248 22.627 0 6.248 16.379 0 22.627-16.379 6.248-22.627 0z"),
		new Team("Green", "#2A9034", "M9 14a5 5 0 0 1 5-5h22a5 5 0 0 1 5 5v22a5 5 0 0 1-5 5H14a5 5 0 0 1-5-5V14z"),
		new Team("Orange", "#DA781F", "M20.67 12.5c1.925-3.333 6.736-3.333 8.66 0l12.124 21c1.924 3.333-.481 7.5-4.33 7.5H12.876c-3.849 0-6.255-4.167-4.33-7.5l12.124-21z"),
	],
	get_players: function(num: number) {
		return this.players.slice(0, num);
	}
};
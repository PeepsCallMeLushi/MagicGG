export class GloryCard {
	constructor(
		public id: number = 0,
		public sets: SetIdRarity[] = [],
		public cardName: string = '',
		public cardCost: string = '',
		public cardColors: string[] = [],
		public superTypes: number[] = [],
		public types: number[] = [],
		public subTypes: number[] = [],
		public cardEffect: string = '',
		public imgURL: string = '',
		public flavourText: string = '',
		public power: string = '',
		public toughness: string = '',
		public rulings: string[] = [],
		public loyaltyCounters: number = 0,
	) {}
}

export class SetIdRarity {
	constructor(
		public cardId: number = 0,
		public set: string = '',
		public rarity: number = 0,
	) {}
}
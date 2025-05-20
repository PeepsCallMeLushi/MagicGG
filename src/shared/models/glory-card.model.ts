export class GloryCard {
	constructor(
		public id: number = 0,
		public sets: number[] = [],
		public cardName: string = '',
		public cardCost: string = '',
		public cardColors: number[] = [],
		public superTypes: number[] = [],
		public types: number[] = [],
		public subTypes: number[] = [],
		public cardRarity: number = 0,
		public cardEffect: string = '',
		public imgURL: string = '',
		public flavourText: string = '',
		public power: string = '',
		public toughness: string = '',
		public rulings: string[] = [],
	) {}
}
import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MAGIC_GLORY_1_SET_LIST } from '../../../magic-gg/glory-card-list/magic_glory_1_set_list';
import { CardSet } from '../../enum/card-set';
import { GloryCard } from '../../models/glory-card.model';
import { CardSuperTypes } from '../../enum/card-super-types';
import { CardTypes } from '../../enum/card-types';
import { CardSubTypes } from '../../enum/card-sub-types';
import { CardRarity } from '../../enum/card-rarity';

@Component({
	selector: 'app-card-viewer',
	imports: [
		NgIf
	],
	standalone: true,
	templateUrl: './card-viewer.component.html',
	styleUrl: './card-viewer.component.scss'
})
export class CardViewerComponent implements OnInit {

	public cardToDisplay: GloryCard = new GloryCard();
	public cardTypes = '';
	public expansion = '';
	public rarity = '';
	public cardNumber = '';
	public cardExists = false;

	constructor(private acRoute: ActivatedRoute) {}

	ngOnInit(): void {
		this.getCardToDisplay();
	}

	private getCardToDisplay(): void {
		const setlist = this.getCardSet();
		if (setlist.length > 0) {
			const cardToGet = this.acRoute.snapshot.paramMap.get('id') ? this.acRoute.snapshot.paramMap.get('id') : 0;
			const setToGet = this.acRoute.snapshot.paramMap.get('set')?.toUpperCase();
			const cardExists = setlist.find(card => {
				return card.sets.some(set => set.set === setToGet && set.cardId === (cardToGet !== null ? +cardToGet : 0));

			})
			if (cardExists) {
				this.cardExists = true;
				this.cardToDisplay = cardExists;
				this.cardToDisplay.superTypes.forEach(type => {
					this.cardTypes += ' ' + this.getCardSuperTypes(type);
				});

				this.cardToDisplay.types.forEach(type => {
					this.cardTypes += ' ' + this.getCardTypes(type);
				});

				if (this.cardToDisplay.subTypes.length > 0) {
					this.cardTypes += ' -';
				}

				this.cardToDisplay.subTypes.forEach(type => {
					this.cardTypes += ' ' + this.getCardSubTypes(type);
				});

				this.cardTypes = this.cardTypes.trim();

				this.cardNumber = ''+this.cardToDisplay.sets[0].cardId;
				this.expansion = this.getExpansion(this.cardToDisplay.sets[0].set);
				this.rarity = this.getRarity(this.cardToDisplay.sets[0].rarity);
			} else {
				this.cardExists = false;
			}

		}
	}

	private getExpansion(expansion: string): string {
		switch(expansion) {
			case CardSet.MAGIC_GLORY_1:
				return 'Magic Glory 1';
			default:
				return '';
		}
	}

	private getRarity(rarity: number): string {
		switch (rarity) {
			case CardRarity.COMMON:
				return 'Common';
			case CardRarity.UNCOMMON:
				return 'Uncommon';
			case CardRarity.RARE:
				return 'Rare';
			case CardRarity.MYTHIC:
				return 'Mythic Rare';
			default:
				return '';
		}
	}

	private getCardSuperTypes(type: number): string {
		switch(type) {
			case CardSuperTypes.LEGENDARY:
				return 'Legendary';
			case CardSuperTypes.GLORY:
				return 'Glory';
			case CardSuperTypes.WORLD:
				return 'World';
			default:
				return '';
		}
	}

	private getCardTypes(type: number): string {
		switch (type) {
			case CardTypes.CREATURE:
				return 'Creature';
			case CardTypes.ENCHANTMENT:
				return 'Enchantment';
			case CardTypes.INSTANT:
				return 'Instant';
			case CardTypes.SORCERY:
				return 'Sorcery';
			case CardTypes.ARTIFACT:
				return 'Artifact';
			case CardTypes.PLANESWALKER:
				return 'Planeswalker';
			default:
				return '';
		}
	}

	private getCardSubTypes(type: number): string {
		switch (type) {
			case CardSubTypes.ALLY:
				return 'Ally';
			case CardSubTypes.COWARD:
				return 'Coward';
			case CardSubTypes.COUNCIL:
				return 'Council';
			case CardSubTypes.GOBLIN:
				return 'Goblin';
			case CardSubTypes.LACKEY:
				return 'Lackey';
			case CardSubTypes.EQUIPMENT:
				return 'Equipment';
			case CardSubTypes.THE_HONOURED_ONE:
				return 'The Honoured One';
			default:
				return '';
		}
	}

	private getCardSet(): GloryCard[] {
		const setToGet = this.acRoute.snapshot.paramMap.get('set');
		switch (setToGet?.toUpperCase()) {
			case CardSet.MAGIC_GLORY_1:
				return MAGIC_GLORY_1_SET_LIST;
			default:
				return [];
		}
	}
}

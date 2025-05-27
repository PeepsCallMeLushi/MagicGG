import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CONSPIRACY_GLORY_1_SET_LIST } from '../../../magic-gg/conspiracy-card-list/conspiracy_glory_1_set_list';
import { MAGIC_GLORY_1_SET_LIST } from '../../../magic-gg/glory-card-list/magic_glory_1_set_list';
import { CardRarity } from '../../enum/card-rarity';
import { CardSet } from '../../enum/card-set';
import { CardSubTypes } from '../../enum/card-sub-types';
import { CardSuperTypes } from '../../enum/card-super-types';
import { CardTypes } from '../../enum/card-types';
import { GloryCard } from '../../models/glory-card.model';
import { FRIEND_OR_FOE_1_SET_LIST } from '../../../magic-gg/conspiracy-card-list/friend_or_foe_1_set_list';

@Component({
	selector: 'app-card-viewer',
	imports: [
		NgIf,
	],
	standalone: true,
	templateUrl: './card-viewer.component.html',
	styleUrl: './card-viewer.component.scss'
})
export class CardViewerComponent implements OnInit {

	public cardToDisplay: GloryCard = new GloryCard();
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
		console.log(setlist);
		if (setlist.length > 0) {
			const cardToGet = this.acRoute.snapshot.paramMap.get('id') ? this.acRoute.snapshot.paramMap.get('id') : 0;
			const setToGet = this.acRoute.snapshot.paramMap.get('set')?.toUpperCase();
			const cardExists = setlist.find(card => {
				return card.sets.some(set => set.set === setToGet && set.cardId === (cardToGet !== null ? +cardToGet : 0));

			})
			if (cardExists) {
				this.cardExists = true;
				this.cardToDisplay = cardExists;


				this.cardNumber = ''+this.cardToDisplay.sets[0].cardId;
				this.expansion = this.getExpansion(this.cardToDisplay.sets[0].set);
				this.rarity = this.cardToDisplay.sets[0].rarity
			} else {
				this.cardExists = false;
			}

		}
	}

	private getExpansion(expansion: string): string {
		switch(expansion) {
			case CardSet.MAGIC_GLORY_1:
				return 'Magic Glory 1';
			case CardSet.CONSPIRACY_GLORY_1:
				return 'Conspiracy Glory 1';
			case CardSet.FRIEND_OR_FOE_1:
				return 'Friend or Foe 1';
			default:
				return '';
		}
	}

	private getCardSet(): GloryCard[] {
		const setToGet = this.acRoute.snapshot.paramMap.get('set');
		switch (setToGet?.toUpperCase()) {
			case CardSet.MAGIC_GLORY_1:
				return MAGIC_GLORY_1_SET_LIST;
			case CardSet.CONSPIRACY_GLORY_1:
				return CONSPIRACY_GLORY_1_SET_LIST;
			case CardSet.FRIEND_OR_FOE_1:
				return FRIEND_OR_FOE_1_SET_LIST;
			default:
				return [];
		}
	}
}

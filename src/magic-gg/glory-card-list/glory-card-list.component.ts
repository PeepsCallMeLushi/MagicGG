import { Component, OnInit } from '@angular/core';
import { MAGIC_GLORY_1_SET_LIST } from './magic_glory_1_set_list';
import { GloryCardComponent } from './glory-card/glory-card.component';
import { ActivatedRoute } from '@angular/router';
import { GloryCard } from '../../shared/models/glory-card.model';
import { CardSet } from '../../shared/enum/card-set';
import { NgIf } from '@angular/common';
import { CONSPIRACY_GLORY_1_SET_LIST } from '../conspiracy-card-list/conspiracy_glory_1_set_list';

@Component({
	selector: 'app-glory-card-list',
	imports: [
		GloryCardComponent,
		NgIf,
	],
	standalone: true,
	templateUrl: './glory-card-list.component.html',
	styleUrl: './glory-card-list.component.scss'
})
export class GloryCardListComponent implements OnInit {

	public cardList: GloryCard[] = [];
	public cardSetList: string = '';

	public cardSetFound = false;

	constructor(private acRoute: ActivatedRoute) {}

	ngOnInit(): void {
		this.gettingSetFromURL();

	}

	private gettingSetFromURL(): void {
		const cardSet = this.acRoute.snapshot.paramMap.get('set')?.toUpperCase();
		switch(cardSet) {
			case CardSet.MAGIC_GLORY_1:
				this.cardList = MAGIC_GLORY_1_SET_LIST;
				this.cardSetList = CardSet.MAGIC_GLORY_1;
				break;
			case CardSet.CONSPIRACY_GLORY_1:
				this.cardList = CONSPIRACY_GLORY_1_SET_LIST;
				this.cardSetList = CardSet.CONSPIRACY_GLORY_1;
				break;
			default:
				this.cardList = [];
				this.cardSetList = '';
				break;
		}
		this.cardSetFound = this.cardList.length > 0;
	}

}

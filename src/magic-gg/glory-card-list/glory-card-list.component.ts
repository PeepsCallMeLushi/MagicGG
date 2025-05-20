import { Component } from '@angular/core';
import { GLORY_CARD_LIST } from './glory-card-list';
import { GloryCardComponent } from './glory-card/glory-card.component';

@Component({
	selector: 'app-glory-card-list',
	imports: [
		GloryCardComponent,
	],
	standalone: true,
	templateUrl: './glory-card-list.component.html',
	styleUrl: './glory-card-list.component.scss'
})
export class GloryCardListComponent {

	public readonly cardList = GLORY_CARD_LIST;

}

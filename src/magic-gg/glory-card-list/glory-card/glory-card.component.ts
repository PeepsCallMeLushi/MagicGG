import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { GloryCard } from '../../../shared/models/glory-card.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-glory-card',
	imports: [
		MatCardModule
	],
	standalone: true,
	templateUrl: './glory-card.component.html',
	styleUrl: './glory-card.component.scss'
})
export class GloryCardComponent {

	@Input() cardToBeDisplayed: GloryCard = new GloryCard();
	@Input() cardSetBeingDisplayed: string = '';

	constructor(private router: Router) {}

	public goToCardDetails(): void {
		const cardId = this.cardToBeDisplayed.sets.find(cardSet => cardSet.set === this.cardSetBeingDisplayed.toLocaleUpperCase())?.cardId;
		this.router.navigate(['card', this.cardSetBeingDisplayed, cardId]);
	}

}

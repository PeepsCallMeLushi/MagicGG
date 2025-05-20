import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { GloryCard } from '../../../shared/models/glory-card.model';

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

}

import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { QuestCount } from '../../../shared/models/quest-count.model';

@Component({
	selector: 'app-bing-card',
	imports: [
		MatButtonModule,
		MatCardModule,
		NgIf,
	],
	templateUrl: './bing-card.component.html',
	styleUrl: './bing-card.component.scss'
})
export class BingCardComponent {

	@Input() bingToDisplay: QuestCount[] = [];
	@Input() isPastBing = false;
	@Output() bingAccepted: EventEmitter<boolean> = new EventEmitter();
	@Output() apagarBing: EventEmitter<boolean> = new EventEmitter();

	public wasBingoAccepted(accepted: boolean): void {
		this.bingAccepted.emit(accepted);
	}

	public deleteBing(accepted: boolean): void {
		this.apagarBing.emit(accepted);
	}

}

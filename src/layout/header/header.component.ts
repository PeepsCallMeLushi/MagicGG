import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
	selector: 'app-header',
	imports: [
		MatButtonModule,
		MatIconModule,
		MatToolbarModule,
	],
	standalone: true,
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss'
})
export class HeaderComponent {

	@Output() burgerButtonClicked: EventEmitter<boolean> = new EventEmitter();

	public burgerButtonWasClicked(): void {
		this.burgerButtonClicked.emit(true);
	}

}

import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { GlorySetItems } from '../glory_set_list';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-set-item',
	imports: [
		MatButtonModule,
		MatCardModule,
	],
	templateUrl: './set-item.component.html',
	styleUrl: './set-item.component.scss'
})
export class SetItemComponent {

	@Input() setToDisplay: GlorySetItems = {
		setName: '',
		setAbbr: '',
		setSize: 0,
	}

	constructor(private router: Router) {}

	public goToSetDetails(): void {
		this.router.navigate(['card-list', this.setToDisplay.setAbbr]);
	}


}

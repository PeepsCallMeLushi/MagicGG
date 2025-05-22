import { Component } from '@angular/core';
import { GlorySetItems } from '../card-set-list/glory_set_list';
import { SetItemComponent } from '../card-set-list/set-item/set-item.component';
import { CONSPIRACY_SET_LIST } from '../card-set-list/conspiracy_set_list';

@Component({
	selector: 'app-conspiracy-card-list',
	imports: [
		SetItemComponent,
	],
	standalone: true,
	templateUrl: './conspiracy-card-list.component.html',
	styleUrl: './conspiracy-card-list.component.html'
})
export class ConspiracyListComponent {

	public conspiracySetList: GlorySetItems[] = CONSPIRACY_SET_LIST;

}

import { Component } from '@angular/core';
import { GLORY_SET_LIST, GlorySetItems } from './glory_set_list';
import { SetItemComponent } from './set-item/set-item.component';

@Component({
  selector: 'app-card-set-list',
  imports: [
	SetItemComponent
  ],
  templateUrl: './card-set-list.component.html',
  styleUrl: './card-set-list.component.scss'
})
export class CardSetListComponent {

	public glorySetList: GlorySetItems[] = GLORY_SET_LIST;

}

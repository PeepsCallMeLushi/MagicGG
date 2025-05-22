import { Routes } from '@angular/router';
import { GloryCardListComponent } from '../magic-gg/glory-card-list/glory-card-list.component';
import { FriendFoeCardListComponent } from '../magic-gg/friend-foe-card-list/friend-foe-card-list.component';
import { HomePageComponent } from '../magic-gg/home-page/home-page.component';
import { GlossaryComponent } from '../magic-gg/glossary/glossary.component';
import { CardViewerComponent } from '../shared/component/card-viewer/card-viewer.component';
import { CardSetListComponent } from '../magic-gg/card-set-list/card-set-list.component';

export const routes: Routes = [
	{
		path: 'card-list',
		children: [
			{
				path: 'glory',
				component: CardSetListComponent,
			},
			{
				path: 'glory/:set',
				component: GloryCardListComponent,
				pathMatch: 'full'
			},
			{
				path: 'glory/:set/:id',
				component: CardViewerComponent,
				pathMatch: 'full'
			},
			{
				path: 'friend-or-foe',
				component: FriendFoeCardListComponent,
			}
		]
	},
	{
		path: 'glossary',
		component: GlossaryComponent,
	},
	{
		path: '**',
		component: HomePageComponent,
	}
];

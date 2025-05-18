import { Routes } from '@angular/router';
import { GloryCardListComponent } from '../magic-gg/glory-card-list/glory-card-list.component';
import { FriendFoeCardListComponent } from '../magic-gg/friend-foe-card-list/friend-foe-card-list.component';
import { HomePageComponent } from '../magic-gg/home-page/home-page.component';
import { GlossaryComponent } from '../magic-gg/glossary/glossary.component';

export const routes: Routes = [
	{
		path: 'card-list',
		children: [
			{
				path: 'glory-cards',
				component: GloryCardListComponent,
			},
			{
				path: 'friend-or-foe-cards',
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

import { Routes } from '@angular/router';
import { GloryCardListComponent } from '../magic-gg/glory-card-list/glory-card-list.component';
import { ConspiracyListComponent } from '../magic-gg/conspiracy-card-list/conspiracy-card-list.component';
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
				path: 'conspiracy',
				component: ConspiracyListComponent,
			},
			{
				path: ':set',
				component: GloryCardListComponent,
				pathMatch: 'full'
			},
		]
	},
	{
		path: 'card/:set/:id',
		component: CardViewerComponent,
		pathMatch: 'full'
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

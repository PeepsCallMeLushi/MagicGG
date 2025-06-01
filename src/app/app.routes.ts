import { Routes } from '@angular/router';
import { GloryCardListComponent } from '../magic-gg/glory-card-list/glory-card-list.component';
import { ConspiracyListComponent } from '../magic-gg/conspiracy-card-list/conspiracy-card-list.component';
import { HomePageComponent } from '../magic-gg/home-page/home-page.component';
import { GlossaryComponent } from '../magic-gg/glossary/glossary.component';
import { CardViewerComponent } from '../shared/component/card-viewer/card-viewer.component';
import { CardSetListComponent } from '../magic-gg/card-set-list/card-set-list.component';
import { GloryFormatsComponent } from '../magic-gg/glory-formats/glory-formats.component';
import { GlorySupertypeComponent } from '../magic-gg/glory-supertype/glory-supertype.component';
import { ConspiracySubtypesComponent } from '../magic-gg/conspiracy-subtypes/conspiracy-subtypes.component';

export const routes: Routes = [
	{
		path: 'formats',
		component: GloryFormatsComponent,
	},
	{
		path: 'glory-supertype',
		component: GlorySupertypeComponent,
	},
	{
		path: 'conspiracy-subtypes',
		component: ConspiracySubtypesComponent,
	},
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

import { Component } from '@angular/core';
import { HeaderComponent } from '../layout/header/header.component';
import { SideNavComponent } from '../layout/side-nav/side-nav.component';

@Component({
	selector: 'app-root',
	imports: [
		HeaderComponent,
		SideNavComponent,
	],
	standalone: true,
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {}

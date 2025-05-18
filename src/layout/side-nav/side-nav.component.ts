import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterModule } from '@angular/router';
import { SIDE_NAV_ITEMS } from './side-nav-items';

@Component({
	selector: 'app-side-nav',
	imports: [
		CommonModule,
		MatButtonModule,
		MatIconModule,
		MatSidenavModule,
		RouterModule,
	],
	standalone: true,
	templateUrl: './side-nav.component.html',
	styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

	@ViewChild('drawer') drawer: MatDrawer = new MatDrawer();

	public readonly sideNavItems = SIDE_NAV_ITEMS;

	constructor(
		private router: Router,
	) {}

	public goToRoute(routeToGo: string): void {
		this.router.navigate(routeToGo.split('/'));
	}
}

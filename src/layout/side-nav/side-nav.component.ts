import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-side-nav',
	imports: [
		CommonModule,
		MatSidenavModule,
		MatButtonModule,
		RouterModule,
	],
	standalone: true,
	templateUrl: './side-nav.component.html',
	styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

	@ViewChild('drawer') drawer: MatDrawer = new MatDrawer();
}

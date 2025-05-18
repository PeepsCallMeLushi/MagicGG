export interface SideNavItem {
	text: string;
	icon: string;
	url: string;
}

export const SIDE_NAV_ITEMS: SideNavItem[] = [
	{
		text: 'Início',
		icon: 'home',
		url: '/'
	},
	{
		text: 'Lista de cartas \'Glory\'',
		icon: 'receipt_long',
		url: 'card-list/glory-cards'
	},
	{
		text: 'Lista de cartas \'Friend Or Foe\'',
		icon: 'contact_page',
		url: 'card-list/friend-or-foe-cards'
	},
	{
		text: 'Glossário',
		icon: 'import_contacts',
		url: 'glossary'
	}
];
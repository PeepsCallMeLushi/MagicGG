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
		text: 'Lista de sets \'Glory\'',
		icon: 'receipt_long',
		url: 'card-list/glory'
	},
	{
		text: 'Lista de sets \'Conspiracy\'',
		icon: 'contact_page',
		url: 'card-list/conspiracy'
	},
	{
		text: 'Glossário',
		icon: 'import_contacts',
		url: 'glossary'
	}
];
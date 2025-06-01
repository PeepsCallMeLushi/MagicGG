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
		text: 'Formats',
		icon: 'format_list_bulleted',
		url: 'formats'
	},
	{
		text: 'Glory Supertype',
		icon: 'category',
		url: 'glory-supertype'
	},
	{
		text: 'Conspiracy Subtypes',
		icon: 'phishing',
		url: 'conspiracy-subtypes'
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
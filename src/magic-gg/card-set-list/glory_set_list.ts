import { CardSet } from "../../shared/enum/card-set";
import { MAGIC_GLORY_1_SET_LIST } from "../glory-card-list/magic_glory_1_set_list";

export interface GlorySetItems {
	setName: string;
	setAbbr: string;
	setSize: number;
}

export const GLORY_SET_LIST: GlorySetItems[] = [
	{
		setName: 'Magic Glory 1',
		setAbbr: CardSet.MAGIC_GLORY_1,
		setSize: MAGIC_GLORY_1_SET_LIST.length
	}
]
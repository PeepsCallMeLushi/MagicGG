import { CardSet } from "../../shared/enum/card-set";
import { CONSPIRACY_GLORY_1_SET_LIST } from "../conspiracy-card-list/conspiracy_glory_1_set_list";
import { FRIEND_OR_FOE_1_SET_LIST } from "../conspiracy-card-list/friend_or_foe_1_set_list";
import { GlorySetItems } from "./glory_set_list";

export const CONSPIRACY_SET_LIST: GlorySetItems[] = [
	{
		setName: 'FriendOrFoe 1',
		setAbbr: CardSet.FRIEND_OR_FOE_1,
		setSize: FRIEND_OR_FOE_1_SET_LIST.length,
	},
	{
		setName: 'Conspiracy Glory 1',
		setAbbr: CardSet.CONSPIRACY_GLORY_1,
		setSize: CONSPIRACY_GLORY_1_SET_LIST.length
	}
]
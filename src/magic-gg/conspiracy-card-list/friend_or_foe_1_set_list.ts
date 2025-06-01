import { CardRarity } from "../../shared/enum/card-rarity";
import { CardSet } from "../../shared/enum/card-set";
import { CardTypes } from "../../shared/enum/card-types";
import { ConspiracySubTypes } from "../../shared/enum/conspiracy-sub-types";
import { GloryCard, SetIdRarity } from "../../shared/models/glory-card.model";

export const FRIEND_OR_FOE_1_SET_LIST: GloryCard[] = [

	new GloryCard(
		1,
		[
			new SetIdRarity(
				1,
				CardSet.FRIEND_OR_FOE_1,
				CardRarity.NONE,
			),
		],
		'Friend name:',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.FRIEND
		],
		'Whenever <i>(Friend name)</i> wins a multiplayer game <b>Roll a d6</b> or <b>Move 3</b>.<br>Whenever <i>(Friend name)</i> loses a multiplayer game <b>Move 1</b>. ',
		'https://mtg.design/i/clri80.jpg',
	),
	new GloryCard(
		2,
		[
			new SetIdRarity(
				2,
				CardSet.FRIEND_OR_FOE_1,
				CardRarity.NONE,
			),
		],
		'Foe name:',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.FOE
		],
		'Whenever <i>(Foe name)</i> loses a multiplayer game <b>Roll a d6</b> or <b>Move 3</b>.<br>Whenever <i>(Foe name)</i> wins a multiplayer game <b>Move 1</b>.',
		'https://mtg.design/i/yrtz67.jpg',
	),
]
import { CardRarity } from "../../shared/enum/card-rarity";
import { CardSet } from "../../shared/enum/card-set";
import { CardTypes } from "../../shared/enum/card-types";
import { ConspiracySubTypes } from "../../shared/enum/conspiracy-sub-types";
import { ReminderTextsWithURLs } from "../../shared/enum/reminder-texts-with-urls";
import { GloryCard, SetIdRarity } from "../../shared/models/glory-card.model";

export const CONSPIRACY_GLORY_1_SET_LIST: GloryCard[] = [
	new GloryCard(
		1,
		[
			new SetIdRarity(
				1,
				CardSet.CONSPIRACY_GLORY_1,
				CardRarity.NONE,
			),
		],
		'Comboing Off!',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.SINGLE_USE
		],
		'If you performed 2 or more extra actions in addition to what the multiplayer game rules allows <b>Move 2</b>.',
		'https://mtg.design/i/tvzl83.jpg',
		'',
		'',
		'',
		[
			'Examples of performing an extra action in addition to what the multiplayer game rules allow are: Extra turns (in MTG you only get one turn per rotation), Extra combats, playing more than one land per turn (Ramp cards like cultivate do not count, but cards like Explore does count), etc. Examples from other games are, in Wyrmspan each player is allowed 5 turns per round, if a player would play a 6th turn in that round, that turn would count as an extra action. Some games have built in rules that allows you to do more than the convetional allowance that you\'re given by the game.',
		]
	),
	new GloryCard(
		2,
		[
			new SetIdRarity(
				2,
				CardSet.CONSPIRACY_GLORY_1,
				CardRarity.NONE,
			),
		],
		'Cry me a river',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.SINGLE_USE
		],
		'If you make a player complain during a multiplayer game you\'re both participating in <b>Roll a d6 </b>.',
		'https://mtg.design/i/viot94.jpg',
	),
	new GloryCard(
		3,
		[
			new SetIdRarity(
				3,
				CardSet.CONSPIRACY_GLORY_1,
				CardRarity.NONE,
			),
		],
		'Cry me a river',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.SINGLE_USE
		],
		'If you make your designated Foe complain during a multiplayer game you\'re both participating in <b>Move 3 </b>.',
		'https://mtg.design/i/qvsg77.jpg',
	),
	new GloryCard(
		4,
		[
			new SetIdRarity(
				4,
				CardSet.CONSPIRACY_GLORY_1,
				CardRarity.NONE,
			),
		],
		'Heads will roll',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.SINGLE_USE
		],
		'If you witness a player rolls 10 or more dice at the same time while they\'re playing a game <b>Roll 2d6</b>.',
		'https://mtg.design/i/joun73.jpg',
		'',
		'',
		'',
		[
			'This conspiracy cares for the ammount of dice that the game being played ordered the players to roll. If the game requested that a player roll 12 dice but they rolled 3 dice 4 times due to limitations, for this Conspiracy\'s effect, that still counts as 12 dice.',
			'If a player rolled 10 or more dice due to different instances, for example the player had 12 triggers to roll one dice per trigger, that counts as 1 dice being rolled 12 times and not 12 dice rolls.',
		],
	),
	new GloryCard(
		5,
		[
			new SetIdRarity(
				5,
				CardSet.CONSPIRACY_GLORY_1,
				CardRarity.NONE,
			),
		],
		'I hated that guy anyway!',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.SINGLE_USE
		],
		'If your designated Foe was the first player to be eliminated in a multiplayer game <b>Roll a d6</b>.',
		'https://mtg.design/i/fqmc11.jpg',
	),
	new GloryCard(
		6,
		[
			new SetIdRarity(
				6,
				CardSet.CONSPIRACY_GLORY_1,
				CardRarity.NONE,
			),
		],
		'I Hope the IRS doesn\'t find me!',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.SINGLE_USE
		],
		'If you have at least 10 objects in the game you\'re playing <b>Move 2</b>.',
		'https://mtg.design/i/ugtu39.jpg',
		'',
		'',
		'',
		[
			ReminderTextsWithURLs.OBJECTS_AND_RESOURCES
		]
	),
	new GloryCard(
		7,
		[
			new SetIdRarity(
				7,
				CardSet.CONSPIRACY_GLORY_1,
				CardRarity.NONE,
			),
		],
		'I\'m a survivor!',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.SINGLE_USE
		],
		'If you lost all of one resource without losing the game after turn 6 <b>Move 5</b>.',
		'https://mtg.design/i/wkwt19.jpg',
		'',
		'',
		'',
		[
			ReminderTextsWithURLs.OBJECTS_AND_RESOURCES,
			'This card can be played on your turn 7 or further',
		],
	),
	new GloryCard(
		8,
		[
			new SetIdRarity(
				8,
				CardSet.CONSPIRACY_GLORY_1,
				CardRarity.NONE,
			),
		],
		'Jerking each other!',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.SINGLE_USE
		],
		'If your designated Friend complimented an action you did within the game or some object you own pertaining to the game during a multiplayer game you both are participating in <b>both Move 3</b>.',
		'https://mtg.design/i/pyzl61.jpg',
		'',
		'',
		'',
		[
			ReminderTextsWithURLs.OBJECTS_AND_RESOURCES,
			'To compliment an action you did within the game means to be complimented on an action like a board wipe or playing a card that they might find cool during that multiplayer game. Complimenting actions done outside of the game or unrelated to that game do not count.',
			'To compliment some object you own pertaining to the game means to be complimented on the material needed to play the game, such as being complimented for sleeves you own, or the dice you\'re using, or your deckbox. Complimenting objects outside of the game or unrelated to the game happening right now, like playing Magic: The Gathering and complimenting the paint job done on miniatures, does not count.',
		],
	),
	new GloryCard(
		9,
		[
			new SetIdRarity(
				9,
				CardSet.CONSPIRACY_GLORY_1,
				CardRarity.NONE,
			),
		],
		'Odd one\'s out',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.SINGLE_USE
		],
		'If you are the 1st player to be eliminated of a game <b>Roll a d6</b>.',
		'https://mtg.design/i/ktgb37.jpg',
	),
	new GloryCard(
		10,
		[
			new SetIdRarity(
				10,
				CardSet.CONSPIRACY_GLORY_1,
				CardRarity.NONE,
			),
		],
		'OUR victory!',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.SINGLE_USE
		],
		'If any other player passes by the starting house <b>Move 3</b>',
		'https://mtg.design/i/iirq14.jpg',
		'"Wait, what if the person went back to the starting house... HUH!?"',
		'',
		'',
		[
			'Any other player means not you. If you pass by the starting house you cannot use your own card to move again.',
			'For a player to pass by the starting house they must either return to the starting house due to dentrimental effects, or complete a lap.'
		]
	),
	new GloryCard(
		11,
		[
			new SetIdRarity(
				11,
				CardSet.CONSPIRACY_GLORY_1,
				CardRarity.NONE,
			),
		],
		'The IRS found me...',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.SINGLE_USE
		],
		'If you have lost at least 5 objects during a single Multiplayer game you\'re participating on < b > Move 2 </b>',
		'https://mtg.design/i/pywz02.jpg',
		'',
		'',
		'',
		[
			ReminderTextsWithURLs.OBJECTS_AND_RESOURCES,
			'This conspiracy cares for the amount of objects lost during the game, not in a single instance, meaning that if you lost an object per turn, it will still count towards the total that this conspiracy cares for.',
		],
	),
	new GloryCard(
		12,
		[
			new SetIdRarity(
				12,
				CardSet.CONSPIRACY_GLORY_1,
				CardRarity.NONE,
			),
		],
		'Corporate Aquisition',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.REUSABLE
		],
		'If a player gets more than one resource in a single turn <b>Roll a d6</b>.',
		'https://mtg.design/i/eoev09.jpg',
		'',
		'',
		'',
		[
			ReminderTextsWithURLs.OBJECTS_AND_RESOURCES
		]
	),
	new GloryCard(
		13,
		[
			new SetIdRarity(
				13,
				CardSet.CONSPIRACY_GLORY_1,
				CardRarity.NONE,
			),
		],
		'Free real estate!',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.REUSABLE
		],
		'When one or more players are Eliminated <b>Move 2</b>.',
		'https://mtg.design/i/sbbn61.jpg',
		'',
		'',
		'',
		[
			'This Conspiracy cares for when a single event causes 1 or more players to lose. For example if 2 players lose in the same combat step, this Conspiracy only activates once.'
		],
	),
	new GloryCard(
		14,
		[
			new SetIdRarity(
				14,
				CardSet.CONSPIRACY_GLORY_1,
				CardRarity.NONE,
			),
		],
		'Loser\'s Loser',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.REUSABLE
		],
		'At the start of your turn, if you\'re tied for last, or you\'re second to last  in the multiplayer game you\'re participating on <b>Move 1</b>.',
		'https://mtg.design/i/tqfv10.jpg',
		'',
		'',
		'',
		[
			'Second to last means the position right above the last position. This means in a game with 4 people, 3rd place is the second to last. In a game with 3 people, 2nd place is the second to last. In a game with 2 people remaining, 1st place is second to last.',
			'Establish the criteria that determines who the last player is with the remaining players on the table and stick to that criteria. It could be Life points, cards in hand, ammount of a certain resource. After agreeing on which criteria determines what causes a player to be the last player, that criteria cannot change for the duration of the game to avoid benefiting you or avoiding you benefiting from this Conspiracy. If, for example, life points is the criteria that determines who is winning and who is losing, then that criteria should be used for the remainder of the game.',
			ReminderTextsWithURLs.OBJECTS_AND_RESOURCES
		],
	),
	new GloryCard(
		15,
		[
			new SetIdRarity(
				15,
				CardSet.CONSPIRACY_GLORY_1,
				CardRarity.NONE,
			),
		],
		'Oh shit, the cops!',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.REUSABLE
		],
		'Whenever a player prevents another player from doing their intentended action with game actions <b>Move 5</b>.',
		'https://mtg.design/i/ipgk78.jpg',
		'',
		'',
		'',
		[
			'To prevent another player from doing their intended action with game actions means to use a counter spell, to place a game piece in a place that prevents another player from completing their plan (like tic, tac, toe), purchasing a plot that another player intended to purchase or was already collecting.',
			'Using words or politics does not count as intended game actions unless the game specifically depends on it, such as Town of Salem.'
		],
	),
	new GloryCard(
		16,
		[
			new SetIdRarity(
				16,
				CardSet.CONSPIRACY_GLORY_1,
				CardRarity.NONE,
			),
		],
		'One man\'s trash is another man\'s treasure',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.REUSABLE
		],
		'If a player caused two or more players to lose all of one or more resources after their turn 4 <b>Move 5</b>.',
		'https://mtg.design/i/xgaw79.jpg',
		'',
		'',
		'',
		[
			ReminderTextsWithURLs.OBJECTS_AND_RESOURCES,
			'You can simultaneously be the player who causes two or more players to lose all of one or more resources and one of the players that lost those resources. For example, if you cast a boardwipe that destroys all of your creatures and all creatures of another player you\'ve fufilled the requirements of this Conspiracy.',
			'This Conspiracy cares for how many players were affected by a single event or action. This means that if a player needs an action or event to make to make a player lose a resource, and then does it again for another player, it doesn\'t count. Something like a board wipe needs to occur since it is a single action affecting multiple players.',
			'This conspiracy triggers only on the turn 5 or further of the player who is causing the other players to lose their resources.'
		],
	),
	new GloryCard(
		17,
		[
			new SetIdRarity(
				17,
				CardSet.CONSPIRACY_GLORY_1,
				CardRarity.NONE,
			),
		],
		'Participation Prize',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.REUSABLE
		],
		'At the start of your turn, if you\'re the losing player <b>Move 3</b>.',
		'https://mtg.design/i/rszy86.jpg',
		'',
		'',
		'',
		[
			'Establish the criteria that determines who the last player is with the remaining players on the table and stick to that criteria. It could be Life points, cards in hand, ammount of a certain resource. After agreeing on which criteria determines what causes a player to be the last player, that criteria cannot change for the duration of the game to avoid benefiting you or avoiding you benefiting from this Conspiracy. If, for example, life points is the criteria that determines who is winning and who is losing, then that criteria should be used for the remainder of the game.',
			ReminderTextsWithURLs.OBJECTS_AND_RESOURCES
		],
	),
	new GloryCard(
		18,
		[
			new SetIdRarity(
				18,
				CardSet.CONSPIRACY_GLORY_1,
				CardRarity.NONE,
			),
		],
		'Reduce, Reuse, and Recycle',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.REUSABLE
		],
		'Whenever you play this conspiracy, if there\'s 2 or more other Reusable Conspiracies <b>Move 4</b>.<br>Whenever another Reusable Conspiracy is played, <b>Move X</b> where X is half the amount of Reusable Conspiracies currently active in this game rounded down.<br>If another Reduce, Reuse, and Recycle is currently active and you don\'t own it, you <b>Move 4</b> instead.<br>You can only own one Reduce, Reuse, and Recycle Conspiracy at a time.',
		'https://mtg.design/i/ffag55.jpg',
		'',
		'',
		'',
		[
			'If you would play another Reduce, Reuse, and Recycle shuffle it back into the Conspiracy deck and draw a card instead.'
		],
	),
	new GloryCard(
		19,
		[
			new SetIdRarity(
				19,
				CardSet.CONSPIRACY_GLORY_1,
				CardRarity.NONE,
			),
		],
		'Social anxiety',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.REUSABLE
		],
		'At the start of each of your turns, if there are at least 20 objects in the game <b>Move 1</b>.',
		'https://mtg.design/i/nrti55.jpg',
		'',
		'',
		'',
		[
			ReminderTextsWithURLs.OBJECTS_AND_RESOURCES
		],
	),
	new GloryCard(
		20,
		[
			new SetIdRarity(
				20,
				CardSet.CONSPIRACY_GLORY_1,
				CardRarity.NONE,
			),
		],
		'Wake me up when the combo stops',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.REUSABLE
		],
		'If one or more players perform 2 or more actions in addition to what the game allows in a single turn <b>Move 2</b>.',
		'https://mtg.design/i/tdwz00.jpg',
		'',
		'',
		'',
		[
			'Examples of performing an extra action in addition to what the multiplayer game rules allow are: Extra turns (in MTG you only get one turn per rotation), Extra combats, playing more than one land per turn (Ramp cards like cultivate do not count, but cards like Explore does count), etc. Examples from other games are, in Wyrmspan each player is allowed 5 turns per round, if a player would play a 6th turn in that round, that turn would count as an extra action. Some games have built in rules that allows you to do more than the convetional allowance that you\'re given by the game.',
			'This conspiracy triggers only once each turn.',
			'If two different players would perform an extra action each, this conspiracy would trigger.'
		],
	),
	new GloryCard(
		21,
		[
			new SetIdRarity(
				21,
				CardSet.CONSPIRACY_GLORY_1,
				CardRarity.NONE,
			),
		],
		'Friends with benefits',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.END_OF_DAY
		],
		'Everyone who had their designated Friend and Foe arguing or debating with each other while both are in the same multiplayer game <b>Roll 2d6</b>.',
		'https://mtg.design/i/awsz52.jpg',
		'',
		'',
		'',
		[
			'Imagine any three players, Player 1, 2 and 3. Player 1\'s designated Friend is player 2, player 1\'s designated Foe is player 3. If player 2 and player 3 argued or debated with each other, while both were playing in the same multiplayer game, Player 1 rolls 2d6.'
		],
	),
	new GloryCard(
		22,
		[
			new SetIdRarity(
				22,
				CardSet.CONSPIRACY_GLORY_1,
				CardRarity.NONE,
			),
		],
		'Is this private Ryan?',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.END_OF_DAY
		],
		'If you didn\'t win any multiplayer game today <b> Roll 2d6 </b>.<br>If the result of at least one of the dice is a 6 or both dice produced the same result, repeat this process.<br>Everytime you resolve this effect, everyone else who didn\'t win a single multiplayer game today <b>Moves 1</b>.<br>Every time you rolled 6 dice this way, reset the count and move BACK to the start, and everyone else who didn\'t also win a game <b>Moves 2 BACK</b>.',
		'https://mtg.design/i/nzna33.jpg',
		'',
		'',
		'',
		[
			'Even if you roll 6 dice and get sent back to the start, you must keep repeating the process if you rolled a 6 or a pair.'
		],
	),
	new GloryCard(
		23,
		[
			new SetIdRarity(
				23,
				CardSet.CONSPIRACY_GLORY_1,
				CardRarity.NONE,
			),
		],
		'Joker!',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.END_OF_DAY
		],
		'<b>Roll 3d6</b> per End of Day Conspiracies resolved before this one.<br>You get an extra Roll for each result that is even.Extra rolls do not generate other extra rolls.<br>The last player on the board gets an extra roll for each result that is odd.You cannot be the last player.Check who is the last player besides you after each odd result.',
		'https://mtg.design/i/zfvp75.jpg',
	),
	new GloryCard(
		24,
		[
			new SetIdRarity(
				24,
				CardSet.CONSPIRACY_GLORY_1,
				CardRarity.NONE,
			),
		],
		'Marcelo\'s Special',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.END_OF_DAY
		],
		'If someone said any of the following phrases or phrases with similar meanings, during a multiplayer game:<ul><li>"Sempre a mim!"</li><li>"Porquê eu!?"</li><li>Não é assim tão mau" / "Podia ser pior"</li></ul><b>Roll 2d6</b> per phrase said, once per phrase.<br>The first placed player <b>Moves X BACK</b> where X is half of the amount you moved rounded up, if you\'re the first placed player, the second placed player <b>Moves X BACK</b> instead.',
		'https://mtg.design/i/gmqa97.jpg',
	),
	new GloryCard(
		25,
		[
			new SetIdRarity(
				25,
				CardSet.CONSPIRACY_GLORY_1,
				CardRarity.NONE,
			),
		],
		'Potato Combo',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.END_OF_DAY
		],
		'If someone said any of the following phrases or phrases with similar meanings, during a multiplayer game:<ul><li>"Such a potato play!"</li><li>"Best day ever!"</li><li>"Só vim ver a bola"</li></ul><b>Roll 2d6</b> per phrase said, once per phrase.<br>The last placed player <b>Moves X</b> where X is half of the amount you moved rounded up, if you\'re the last placed player, move twice that amount instead.',
		'https://mtg.design/i/wjoy46.jpg',
	),
	new GloryCard(
		26,
		[
			new SetIdRarity(
				26,
				CardSet.CONSPIRACY_GLORY_1,
				CardRarity.NONE,
			),
		],
		'"Truly yours... Carolina!"',
		[],
		[],
		[],
		[
			CardTypes.CONSPIRACY
		],
		[
			ConspiracySubTypes.END_OF_DAY
		],
		'During a multiplayer game, if a Player got roasted/bullied by their own designated Friend while that Player was talking seriously or explaining something.<br>That friend <b>Moves 3</b>, the player who got roasted / bullied <b>Moves 5</b>, you <b>Roll a d6</b> per player roasted / bullied by their designated Friend.',
		'https://mtg.design/i/qmpb20.jpg',
	),
]
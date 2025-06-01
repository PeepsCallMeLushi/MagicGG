import { CardColors } from "../../shared/enum/card-colors";
import { CardRarity } from "../../shared/enum/card-rarity";
import { CardSet } from "../../shared/enum/card-set";
import { CardSubTypes } from "../../shared/enum/card-sub-types";
import { CardSuperTypes } from "../../shared/enum/card-super-types";
import { CardTypes } from "../../shared/enum/card-types";
import { CostPips } from "../../shared/enum/cost-pips";
import { ReminderTexts } from "../../shared/enum/reminder-texts";
import { ReminderTextsWithURLs } from "../../shared/enum/reminder-texts-with-urls";
import { GloryCard, SetIdRarity } from "../../shared/models/glory-card.model";

export const MAGIC_GLORY_1_SET_LIST: GloryCard[] = [
	new GloryCard(
		1,
		[
			new SetIdRarity(
				1,
				CardSet.MAGIC_GLORY_1,
				CardRarity.RARE,
			)
		],
		'Golos\' Piligrimage',
		[],
		[
			CardColors.COLORLESS,
		],
		[
			CardSuperTypes.LEGENDARY,
			CardSuperTypes.WORLD,
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.ENCHANTMENT,
		],
		[],
		`${ReminderTextsWithURLs.COMBO_STAR} - Endstep<br><br>Sacrifice Golos\' Piligrimage: If Golos\' Piligrimage had 20 or more combo counters on it, you get an emblem with "At the beginning of each player\'s upkeep that player gets a Pilgrim counter." ${ReminderTexts.PILGRIM_COUNTERS}`,
		'https://mtg.design/i/zwhe08.jpg',
	),
	new GloryCard(
		2,
		[
			new SetIdRarity(
				2,
				CardSet.MAGIC_GLORY_1,
				CardRarity.RARE,
			)
		],
		'Spike\'s Meet-up',
		[],
		[
			CardColors.COLORLESS,
		],
		[
			CardSuperTypes.LEGENDARY,
			CardSuperTypes.WORLD,
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.ENCHANTMENT,
		],
		[],
		`${ReminderTextsWithURLs.COMBO_STAR} - A player Eats, Drinks, leaves the table while still alive ${ReminderTexts.EATING_DRINKING}<br><br>Sacrifice Spike\'s Meet-up: If Spike\'s Meet-up had 5 or more combo counters on it, you get an emblem with "All players play with their hands and with the top card of their libraries revealed. Players may play cards from the top of their library. Players may play 2 additional lands on each of their turns. Players may cast spells from exile by paying their mana cost and by exiling a card from their and. Each nonland card in each player\'s graveyard has escape. The Escape cost is their mana cost. Permanents cast this way enter with a finality counter on them."`,
		'https://mtg.design/i/brzg41.jpg',
	),
	new GloryCard(
		3,
		[
			new SetIdRarity(
				3,
				CardSet.MAGIC_GLORY_1,
				CardRarity.RARE,
			)
		],
		'Ajani\'s Protection',
		[],
		[
			CardColors.WHITE,
		],
		[
			CardSuperTypes.LEGENDARY,
			CardSuperTypes.WORLD,
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.ENCHANTMENT,
		],
		[],
		`${ReminderTextsWithURLs.COMBO_STAR} - Gaining 5 or more Life, Attacking without Tapping, Exiling creatures creatures from the battlefield<br><br>Sacrifice Ajani\'s Protection: If Ajani\'s Protection had 5 or more combo counters on it, you get an emblem with "All Creatures have Flying, Vigilance, Lifelink, Double Strike, Shroud, Indistructuble and Toxic 1. Creatures can block more than one creature. Whenever a Life is gained through combat put a counter on this emblem. If this emblem has 120 or more counters or every player has an Ajani planeswalker with different names on the field, everyone wins the game."`,
		'https://mtg.design/i/ukxp81.jpg',
	),
	new GloryCard(
		4,
		[
			new SetIdRarity(
				4,
				CardSet.MAGIC_GLORY_1,
				CardRarity.UNCOMMON,
			)
		],
		'Teferi\'s OVER protection',
		[],
		[
			CardColors.WHITE,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[],
		`Split Second ${ReminderTexts.SPLIT_SECOND}<br><br>Choose a player.<br>Until the end of the chosen player\'s endstep: That player\'s life total can\'t change and they gain protection from everything. All permanents they control phase out. All their spells are exiled.`,
		'https://mtg.design/i/dosf80.jpg',
		'"I\'ll make you disappear!"'
	),
	new GloryCard(
		5,
		[
			new SetIdRarity(
				5,
				CardSet.MAGIC_GLORY_1,
				CardRarity.UNCOMMON,
			)
		],
		'World Balance',
		[],
		[
			CardColors.WHITE,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[],
		'Sum all life totals and then set every player\'s life totals equal to a fourth of that sum ammount rounded up.<br>The player who lost the most life and their permanents gain hexproof and indistructible until their next upkeep.<br>The player who gained the most life Sacrifices a non land permanent.<br>All other players Sacrifice all of their clue tokens.',
		'https://mtg.design/i/diuv07.jpg',
		'"Now you\'re clueless!"'
	),
	new GloryCard(
		6,
		[
			new SetIdRarity(
				6,
				CardSet.MAGIC_GLORY_1,
				CardRarity.RARE,
			)
		],
		'Jace\'s Generosity',
		[],
		[
			CardColors.BLUE,
		],
		[
			CardSuperTypes.LEGENDARY,
			CardSuperTypes.WORLD,
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.ENCHANTMENT,
		],
		[],
		`${ReminderTextsWithURLs.COMBO_STAR} - Drawing a card outside of their draw phase, Scrying, Surveiling<br><br>Sacrifice Jace\'s Generosity: If Jace\'s Generosity had 3 or more combo counters on it, you get an emblem with "All Players Draw an additional Card in their draw phase"`,
		'https://mtg.design/i/ymew54.jpg',
	),
	new GloryCard(
		7,
		[
			new SetIdRarity(
				7,
				CardSet.MAGIC_GLORY_1,
				CardRarity.COMMON,
			)
		],
		'Monkey See Monkey Do',
		[],
		[
			CardColors.BLUE,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[],
		'Copy Target spell or Ability that isn\'t a mana ability.<br>This spell can copy Glory spells and abilities by Glory sources that aren\'t mana abilities.',
		'https://mtg.design/i/llda40.jpg',
		'"Better than a bootleg!"'
	),
	new GloryCard(
		8,
		[
			new SetIdRarity(
				8,
				CardSet.MAGIC_GLORY_1,
				CardRarity.COMMON,
			)
		],
		'Technically I Still Don\'t Play Blue!',
		[],
		[
			CardColors.COLORLESS,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[],
		`Devoid ${ReminderTexts.DEVOID}<br><br>Counter Target Spell or Ability that isn\'t a mana ability.<br>This spell can counter Glory spells and abilities by Glory sources that aren\'t mana abilities.`,
		'https://mtg.design/i/yuvh62.jpg',
		'"I wanna play too...!"'
	),
	new GloryCard(
		9,
		[
			new SetIdRarity(
				9,
				CardSet.MAGIC_GLORY_1,
				CardRarity.UNCOMMON,
			)
		],
		'Turbulent Slit',
		[],
		[
			CardColors.BLUE,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[],
		`Chose a permanent you control. Return it and target permanent you don\'t control that shares the same type as the permanent chosen this way.<br>Overload <i class="ms ms-2 ms-cost ms-shadow"></i><i class="ms ms-up ms-cost ms-shadow"></i> ${ReminderTexts.OVERLOAD}`,
		'https://mtg.design/i/jfco81.jpg',
		'"Definitly not Cyclonic Rift!"'
	),
	new GloryCard(
		10,
		[
			new SetIdRarity(
				10,
				CardSet.MAGIC_GLORY_1,
				CardRarity.COMMON,
			)
		],
		'2nd Breakfast',
		[],
		[
			CardColors.BLACK,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[],
		'Target player gains 10 life.<br>If a player has gained 20 or more life from the effects of other 2nd Breakfast cards or copies of it this turn, they lose 30 life instead.',
		'https://mtg.design/i/xvcv50.jpg',
		'"Ugh...I\'m feeling sick..."'
	),
	new GloryCard(
		11,
		[
			new SetIdRarity(
				11,
				CardSet.MAGIC_GLORY_1,
				CardRarity.COMMON,
			)
		],
		'Get them by the balls',
		[],
		[
			CardColors.BLACK,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.SORCERY,
		],
		[],
		`Sacrifice a nonland permanent you control. Create a 4/4 Black and White Spirit Creature token named Vengeful Spirit with the same text box as the sacrificed permanent and create 2 gold tokens. ${ReminderTexts.GOLD_TOKEN}`,
		'https://mtg.design/i/azuh42.jpg',
		'"MY BALLS! MY BALLS ARE MISSING!"',
	),
	new GloryCard(
		12,
		[
			new SetIdRarity(
				12,
				CardSet.MAGIC_GLORY_1,
				CardRarity.COMMON
			)
		],
		'Powersnatch',
		[],
		[
			CardColors.BLACK,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.SORCERY,
		],
		[],
		'Target player reveals their hand, you choose a noncreature, nonenchantment card from it. That player discards that card.',
		'https://mtg.design/i/srjw30.jpg',
		'"You are.... the WEAKEST link...!"',
	),
	new GloryCard(
		13,
		[
			new SetIdRarity(
				13,
				CardSet.MAGIC_GLORY_1,
				CardRarity.UNCOMMON,
			)
		],
		'Profane World Balance',
		[],
		[
			CardColors.BLACK,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[],
		'The players with the lowest and the highest life totals exchange life totals.<br>Target player loses life equal to the difference.',
		'https://mtg.design/i/yyta30.jpg',
		'"I don\'t want this life anymore..."',
	),
	new GloryCard(
		14,
		[
			new SetIdRarity(
				14,
				CardSet.MAGIC_GLORY_1,
				CardRarity.RARE,
			)
		],
		'Tiny Bones\' Tiny Bones',
		[],
		[
			CardColors.BLACK,
		],
		[
			CardSuperTypes.LEGENDARY,
			CardSuperTypes.WORLD,
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.ENCHANTMENT,
		],
		[],
		`${ReminderTextsWithURLs.COMBO_STAR} - Discard a card, Nonland Permanents being sacrificed<br><br>Sacrifice Tiny Bones\' Tiny Bones: If Tiny Bones\' Tiny Bones had 4 or more combo counters on it, you get an emblem with: "Whenever a player discards a card or sacrifices a permanent they get a 2/2 Zombie that is all colours if it was a creature, they get a gold token if it was a land, they draw a card if it was anything else."`,
		'https://mtg.design/i/xyfz25.jpg',
	),
	new GloryCard(
		15,
		[
			new SetIdRarity(
				15,
				CardSet.MAGIC_GLORY_1,
				CardRarity.UNCOMMON,
			)
		],
		'Casino Extortion',
		[],
		[
			CardColors.RED,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[],
		'Each player may choose to get a card from their deck into their hand or get a permanent from their deck into the battlefield.<br>Each player who put a card into their hand this way discards a card at random from their hand.<br>Each player who put a card on the battlefield this way sacrifices permanents of the same type until the total converted mana cost of the sacrificed permanents is equal or greater to 1 minus the permanent\'s converted mana cost.',
		'https://mtg.design/i/wble22.jpg',
		'"I took a calculated risk! But boy am I bad at math..."'
	),
	new GloryCard(
		16,
		[
			new SetIdRarity(
				16,
				CardSet.MAGIC_GLORY_1,
				CardRarity.UNCOMMON,
			)
		],
		'Dockside Lackey',
		[
			CostPips.GENERIC_2,
			CostPips.PHYREXIAN_RED,
			'',
		],
		[
			CardColors.RED,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.CREATURE,
		],
		[
			CardSubTypes.GOBLIN,
			CardSubTypes.LACKEY,
		],
		'When Dockside Lackey enters the battlefield create a gold token for each opponent who has an artifact. Repeat this proccess for enchantments.',
		'https://mtg.design/i/xaes75.jpg',
		'"I\'ll take a little bit of this, and a little bit of that!"',
		'1',
		'1',
	),
	new GloryCard(
		17,
		[
			new SetIdRarity(
				17,
				CardSet.MAGIC_GLORY_1,
				CardRarity.COMMON,
			)
		],
		'Dockside Minion',
		[
			CostPips.GENERIC_1,
			CostPips.PHYREXIAN_RED,
			CostPips.PHYREXIAN_RED,
		],
		[
			CardColors.RED,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.CREATURE,
		],
		[
			CardSubTypes.GOBLIN,
			CardSubTypes.ALLY,
		],
		'Create a gold token for each player that controls a nontoken artifact or enchanment.',
		'https://mtg.design/i/hrqh08.jpg',
		'"Me takes candy!"',
		'0',
		'1',
	),
	new GloryCard(
		18,
		[
			new SetIdRarity(
				18,
				CardSet.MAGIC_GLORY_1,
				CardRarity.MYTHIC,
			)
		],
		'Dockside Mob Boss',
		[
			CardColors.RED,
		],
		[
			CardColors.RED,
		],
		[
			CardSuperTypes.LEGENDARY,
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.CREATURE,
		],
		[
			CardSubTypes.GOBLIN,
			CardSubTypes.COWARD,
		],
		'When Dockside Mob Boss enters the battlefield create X Gold tokens where X is the number of noncreature and nonbasic land permanents in each opponents battlefield, graveyard and exile.<br>Repeat this process for each card named Sol Ring, Command Tower, Dockside Lackey, Dockside Minion and Dockside Extortionist on each player\'s battlefield, graveyard and exile.<br>Dockside Mob Boss cannot be your commander.',
		'https://mtg.design/i/mekc27.jpg',
		'"A small price for MY salvation"',
		'2',
		'2',
	),
	new GloryCard(
		19,
		[
			new SetIdRarity(
				19,
				CardSet.MAGIC_GLORY_1,
				CardRarity.COMMON,
			)
		],
		'Hot wheels',
		[],
		[
			CardColors.RED,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[
		],
		'Each player secretly picks a number from 1 through 7, then those numbers are revealed.<br>Each player discards cards equal to the sum of the two lowest numbers. Players who can\'t discard many cards, mill the difference.<br>Then each player draws cards equal to the sum of the two highest numbers.',
		'https://mtg.design/i/ovtk40.jpg',
		'"FWAST AND FWUWIOUS!"',
	),
	new GloryCard(
		20,
		[
			new SetIdRarity(
				20,
				CardSet.MAGIC_GLORY_1,
				CardRarity.COMMON,
			)
		],
		'Impulse',
		[],
		[
			CardColors.RED,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[],
		`Cleave <i class="ms ms-rp ms-cost ms-shadow"></i>${ReminderTexts.CLEAVE}<br>Draw 4 cards[, then discard 2 cards].`,
		'https://mtg.design/i/nhhm89.jpg',
		'I bet you\'re holding a goblin ass face drawing cards, aren\'t you?'
	),
	new GloryCard(
		21,
		[
			new SetIdRarity(
				21,
				CardSet.MAGIC_GLORY_1,
				CardRarity.RARE,
			)
		],
		'Ob Nixilis\' Impulse',
		[],
		[
			CardColors.RED,
		],
		[
			CardSuperTypes.LEGENDARY,
			CardSuperTypes.WORLD,
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.ENCHANTMENT,
		],
		[],
		`${ReminderTextsWithURLs.COMBO_STAR} - One or more players lost exactly 1 life each<br><br>Sacrifice Ob Nixilis\' Impulse: If Ob Nixilis\' Impulse had 10 or more combo counters on it, you get an emblem with "Whenever a player causes one or more other players to lose exactly 1 life each, that player exiles the top card of their library and they may cast it until their next end step."`,
		'https://mtg.design/i/zpju99.jpg',
	),
	new GloryCard(
		22,
		[
			new SetIdRarity(
				22,
				CardSet.MAGIC_GLORY_1,
				CardRarity.COMMON,
			)
		],
		'My name is Cabral. Pedro Álvares Cabral.',
		[],
		[
			CardColors.GREEN,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.SORCERY,
		],
		[],
		`Cleave <i class="ms ms-gp ms-cost ms-shadow"></i> ${ReminderTexts.CLEAVE}<br><br>Target Player searches their library for up to two[basic] land cards, reveal those cards and put[one into their hand and] the rest in the battlefield[tapped].`,
		'https://mtg.design/i/ymvv97.jpg',
		'"Is that Brazil, caralho!?"',
	),
	new GloryCard(
		23,
		[
			new SetIdRarity(
				23,
				CardSet.MAGIC_GLORY_1,
				CardRarity.RARE,
			)
		],
		'Nissa\'s Reach',
		[],
		[
			CardColors.GREEN,
		],
		[
			CardSuperTypes.LEGENDARY,
			CardSuperTypes.WORLD,
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.ENCHANTMENT,
		],
		[],
		`${ReminderTextsWithURLs.COMBO_STAR} - Lands entering the battlefield<br><br>Sacrifice Nissa\'s Reach: If Nissa\'s Reach had 8 or more combo counters on it, you get an emblem with "All Players\' Lands produce one more mana that it could produce"`,
		'https://mtg.design/i/zbci78.jpg',
	),
	new GloryCard(
		24,
		[
			new SetIdRarity(
				24,
				CardSet.MAGIC_GLORY_1,
				CardRarity.UNCOMMON,
			)
		],
		'Overwhelming Stompy',
		[],
		[
			CardColors.GREEN,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[],
		`Cleave<i class="ms ms-3 ms-cost ms-shadow"></i><i class="ms ms-gp ms-cost ms-shadow"></i> ${ReminderTexts.CLEAVE}<br>[Until end of turn,] Creatures you control gain Trample and gain +X/+X where X is the greatest power amongst creatures [you control] in the battlefield.`,
		'https://mtg.design/i/irvc08.jpg',
		'"Y\'all\'re about to die!"',
	),
	new GloryCard(
		25,
		[
			new SetIdRarity(
				25,
				CardSet.MAGIC_GLORY_1,
				CardRarity.UNCOMMON,
			)
		],
		'All is fair in ____ And War',
		[],
		[
			CardColors.RED,
			CardColors.WHITE,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.SORCERY,
		],
		[],
		'This Spell Cannot be countered.<br>As you\'re casting this spell choose another player to fill the blank.<br><br>Party - Everyone draws a card and the next time each player would play their commander, reduce the ammount of colorless mana in its cost to 0.<br>Love - Put Commanders from the command zone onto the battlefield under your control.Gain Control of all commanders.Untap each commander and each commander gains haste.Each commander cannot attack their owner.At the end of turn return each commander to their owner\'s control with a +X/+X counter where X is the greatest mana value between commanders and they\'re goaded until the end of the game.<br>Any other word - Surveil 1.',
		'https://mtg.design/i/oczl87.jpg',
	),
	new GloryCard(
		26,
		[
			new SetIdRarity(
				26,
				CardSet.MAGIC_GLORY_1,
				CardRarity.MYTHIC,
			)
		],
		'Animatou\'s Whim',
		[],
		[
			CardColors.WHITE,
			CardColors.BLUE,
			CardColors.BLACK,
		],
		[
			CardSuperTypes.LEGENDARY,
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.SORCERY,
		],
		[],
		'Choose Left, Right or Diagonal. If left or right were chosen, each player rotates seats to the chosen direction, they take their Glory, Conspiracy and FriendOrFoe cards with them.<br>If Diagonal was chosen, the same happens but the players change with the player to their diagonal instead of rotating.',
		'https://mtg.design/i/gxep44.jpg',
	),
	new GloryCard(
		27,
		[
			new SetIdRarity(
				27,
				CardSet.MAGIC_GLORY_1,
				CardRarity.MYTHIC,
			)
		],
		'Burgeoning Smothering Studying',
		[],
		[
			CardColors.GREEN,
			CardColors.WHITE,
			CardColors.BLUE,
		],
		[
			CardSuperTypes.LEGENDARY,
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.ENCHANTMENT,
		],
		[],
		'Cumulative Upkeep <i class="ms ms-1 ms-cost ms-shadow"></i><br><br>Whenever an opponent draws a card you may draw a card unless an opponent pays <i class="ms ms-1 ms-cost ms-shadow"></i><br>Whenever an opponent casts a spell you may create a treasure token unless an opponent pays <i class="ms ms-2 ms-cost ms-shadow"></i><br>Whenever an opponent plays their first land in a turn you may put a land onto the battlefield unless any number of opponents collectively pay <i class="ms ms-3 ms-cost ms-shadow"></i>',
		'https://mtg.design/i/taew74.jpg',
		'"Rhystic Tithe?"'
	),
	new GloryCard(
		28,
		[
			new SetIdRarity(
				28,
				CardSet.MAGIC_GLORY_1,
				CardRarity.UNCOMMON,
			)
		],
		'Burgeoning Smothering Studying',
		[],
		[
			CardColors.WHITE,
			CardColors.BLUE,
			CardColors.BLACK,
			CardColors.RED,
			CardColors.GREEN,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.ENCHANTMENT,
		],
		[],
		`Glory Kicker -  Discard a Card, Tap an untapped Creature you control, Sacrifice a creature, Return a nonland permanent you control to its owner\'s hand and/or pay 5 life. ${ReminderTexts.GLORY_KICKER}<br><br>Sacrifice target permanent you control.Search your library for a card with Converted Mana Cost equal to 1 plus the sacrificed card\'s cost plus the ammount of times it was kicked and put it on the battlefield, then suffle your library.<br>A land\'s converted mana cost is <i class="ms ms-0 ms-cost ms-shadow"></i>.`,
		'https://mtg.design/i/pfuc49.jpg',
		'"To infinity, and beyond!"'
	),
	new GloryCard(
		29,
		[
			new SetIdRarity(
				29,
				CardSet.MAGIC_GLORY_1,
				CardRarity.MYTHIC,
			)
		],
		'Clown Fiesta',
		[],
		[
			CardColors.WHITE,
			CardColors.BLUE,
			CardColors.BLACK,
			CardColors.RED,
			CardColors.GREEN,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.SORCERY,
		],
		[],
		`Split Second ${ReminderTexts.SPLIT_SECOND}<br><br>`
			+'This Spell Cannot be countered.<br><br>If each other player in the game agrees to lose half of their Life rounded up, exile this spell from the stack.<br><br>'
		+ `Glory Kicker - Sacrifice a nontoken creature, nontoken enchantment, nontoken artifact, nontoken land and/or a token.${ReminderTexts.GLORY_KICKER}<br>`
			+'Roll a dice, plus a dice for each time this spell was kicked, any dice may be chosen per dice roll.<br><br>'
			+'1 - Set your life to 1. If your Life was already 1 you lose the game.<br><br>'
			+'2 - Choose up to two players. Take control of all permanents that share a type with the card you sacrificed this way from those two players.<br><br>'
			+'3 - Up to 3 other players of your choice must play a game of rock, paper, scizzors until there\'s a clear loser.The loser\'s creatures must then fight creatures of the other 2 players that participated in the RPS game.<br>The Loser\'s creatures gain a counter of either, deathtouch or indistructuble of your choice.<br>If there\'s only 1 player remaining when you rolled a 3, you lose the game instead.<br><br>'
			+'4 - You gain 4 life, Draw 4 Cards and deal 4 damage to each opponent.<br><br>'
			+'5 - Roll 2 other dice, any dice, one will roll to decide odd or even, the other will roll for a number, you decide which is which after seeing the results.<br>'
				+'Even - Gain Twice X Life where X is the other dice roll.<br>'
				+'Odd - The opponent with the least Life will divide 3 times X damage amongst opponents and creatures he or she doesn\'t control where X is the other dice roll.<br><br>'
			+'6 - Make 6 copies of the sacrificed permanent.<br><br>'
			+'If you rolled even in the original dice roll, for each opponent repeat this process on their permanents as if they were yours.<br><br>'
			+'If you rolled odd in the original dice roll, Take the clown fiesta to another Magic: The gathering table that is happening at this moment.<br>'
			+'This effect ends in that table.Give this effect to the player that has the lowest Life points.<br><br>'
			+'Each player that agreed to pay half their Life before the casting player read this card until the end, needs to pay the price again.<br><br>'
			+'If all other players agreed to exile this spell, before the casting player got the chance to read the whole effect, they lose the game instead.',
		'https://mtg.design/i/yrsu92.jpg',
		'"<a href="https://youtu.be/pct1uEhAqBQ?si=qPAN_AMzPVOgSlze&t=12" target="_blank">Click me for video instructions.</a>"',
		'',
		'',
		[
			'This cards values and effects may be interacted with and altered by other cards on the battlefield. Such examples are: Getting more dice rolls with <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=527418" target="_blank">Barbarian Class</a>, not being able to draw cards due to <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=460988" target="_blank">Narset Parter or Veils<a>\' effect or doubling your life gain due to <a href="https://gatherer.wizards.com/pages/card/details.aspx?name=Rhox%20Faithmender" target="_blank">Rhox Faithmender.</a>',
			'Any triggered Ability must wait for Clown\'s Fiesta full resolution before it can resolve.',
			'Each other player refers to each other player participating in the game when this spell was cast.',
			'For this spell to be exiled, each other player participatig in the game must agree to pay the life total, each. For example, in a table with 4 players where each player has 40 life, if player 1 casts Clown Fiesta, for it to get exiled each other player must agree to lose 20 life points each.',
			'Each dice roll is considered is part of the same resolution of this spell\'s effect',
			'When choosing a dice you may choose ANY dice in ANY combination. This means that you can choose all d6, or you can choose all differen\'t die.',
			'You can resolve each dice individually before choosing which dice to roll.',
			'Original dice refers to the one dice that Clown Fiesta allows you to roll, the extra dice obtained by the kicker does not count towards the original dice.',
			'If the original dice result was even, when resolving this effect for each other opponent, you choose what gets sacrificed, you get the benefits and you only roll one dice. Each resolution is treated as its own instance in the stack. You cannot pay the Glory Kicker cost to increase dice rolls. Each opponent resoltion does not have an original dice roll.',
			'If the original dice result was odd, when this effect is taken to another multiplayer Magic: The Gathering game that is happening at this moment. The player that is the new owner of this effect cannot pay the Glory kicker cost to roll more dice. This resolution does not have an original dice roll.',
			'When this effect is taken to another game, it interrupts any other action happening at that moment.',
			'The other players lose the game if they agree to pay their life points before you read the effect until the end WHILE you\'re reading it. Making pauses to let other people speak, debate or clarify questions does NOT count as being interrupted.',
			'Whenever you\'re repeating Clown Fiesta due to an Original roll of even or odd, the Lose the Game clause no longer applies.',
		]
	),
	new GloryCard(
		30,
		[
			new SetIdRarity(
				30,
				CardSet.MAGIC_GLORY_1,
				CardRarity.MYTHIC,
			)
		],
		'Council of Belle and Brawl',
		[],
		[
			CardColors.RED,
			CardColors.GREEN,
		],
		[
			CardSuperTypes.LEGENDARY,
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[
			CardSubTypes.COUNCIL,
		],
		`${ReminderTexts.LEGENDARY_INSTANT}<br><br>`
		+ `Split Second ${ReminderTexts.SPLIT_SECOND}<br><br>`
			+'Each Player secretly votes for Belle or Brawl, then those votes are revealed.<br>If Belle gets more votes, each player creates a Beauty token.<br>If Brawl gets more votes or is tied for more votes, each player creates a Ugly Beast token for each opponent.',
		'https://mtg.design/i/lpor52.jpg',
		'',
		'',
		'',
		[
			ReminderTexts.LEGENDARY_INSTANT_RULINGS,
			'A Beauty Token is a 1/5 white and black Human token with first strike and deathtouch.',
			'A Ugly Beast Token is a 4/4 red and green Beast token with trample and menace.'
		]
	),
	new GloryCard(
		31,
		[
			new SetIdRarity(
				31,
				CardSet.MAGIC_GLORY_1,
				CardRarity.MYTHIC,
			)
		],
		'Council of Body and Mind',
		[],
		[
			CardColors.GREEN,
			CardColors.BLUE,
		],
		[
			CardSuperTypes.LEGENDARY,
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[
			CardSubTypes.COUNCIL,
		],
		`${ReminderTexts.LEGENDARY_INSTANT}<br><br>`
			+`Split Second ${ReminderTexts.SPLIT_SECOND}<br><br>`
		+ 'Each Player secretly votes for Body or Mind, then those votes are revealed.<br>If Body gets more votes, each player sets their Life back to their starting life total, all poison counters are removed, players cannot get poisoned, players cannot win or lose the game until it is the turn of the player that cast this spell.<br>If Mind gets more votes, or is tied for more votes, each player Scries 3, Draws 4.',
		'https://mtg.design/i/gtcb95.jpg',
		'',
		'',
		'',
		[
			ReminderTexts.LEGENDARY_INSTANT_RULINGS,
		]
	),
	new GloryCard(
		32,
		[
			new SetIdRarity(
				32,
				CardSet.MAGIC_GLORY_1,
				CardRarity.MYTHIC,
			)
		],
		'Council of Chaos and Order',
		[],
		[
			CardColors.BLUE,
			CardColors.BLACK,
		],
		[
			CardSuperTypes.LEGENDARY,
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[
			CardSubTypes.COUNCIL,
		],
		`${ReminderTexts.LEGENDARY_INSTANT}<br><br>`
		+ `Split Second ${ReminderTexts.SPLIT_SECOND}<br><br>`
		+ 'Each Player secretly votes for Chaos or Order, then those votes are revealed.<br>If Order gets more votes, each player sacrifices a create and gains life equal to its toughness and draws cards equal to half of its power rounded down.<br>If Chaos gets more votes, or is tied for more votes, each player sacrifices a creature, each oponent loses life equal to the sacrificed creature\'s thoughness, each player mills cards equal to its power and draws cards equal to the total converted mana cost they\'ve milled this way.',
		'https://mtg.design/i/khpn62.jpg',
		'',
		'',
		'',
		[
			ReminderTexts.LEGENDARY_INSTANT_RULINGS,
		]
	),
	new GloryCard(
		33,
		[
			new SetIdRarity(
				33,
				CardSet.MAGIC_GLORY_1,
				CardRarity.MYTHIC,
			)
		],
		'Council of Death and Rebirth',
		[],
		[
			CardColors.WHITE,
			CardColors.BLACK,
		],
		[
			CardSuperTypes.LEGENDARY,
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[
			CardSubTypes.COUNCIL,
		],
		`${ReminderTexts.LEGENDARY_INSTANT}<br><br>`
		+ `Split Second ${ReminderTexts.SPLIT_SECOND}<br><br>`
		+ 'Each Player secretly votes for Death or Rebirth, then those votes are revealed<br>If Rebirth gets more votes, each player sacrifices all of their creatures. Each player creates a copy token of all nontoken creatures sacrificed this way. The tokens aren\'t legendary if the sacrificed creatures were legendary.The tokens are spirits in addition to the sacrificed creature\'s types.<br>If Death gets more votes, or is tied for more votes, all creatures are sacrificed.',
		'https://mtg.design/i/mmxx56.jpg',
		'',
		'',
		'',
		[
			ReminderTexts.LEGENDARY_INSTANT_RULINGS,
			'If Rebirth gets more votes, Council of Death and Rebirth creates copies of nontoken creatures that were sacrificed with its effect.',
			'If Rebirth gets more votes, each player creates a copy token of all nontoken creatures sacrificed with Council of Death and Rebirth.',
			'If Rebirth gets more votes, the copy tokens created by Council of Death and Rebirth lose Legendary if they were legends.',
			'If Rebirth gets more votes, the copy tokens created by Council of Death and Rebirth are spirits in addition to their other types. A Goblin Coward becomes a Goblin Coward Spirit',
		]
	),
	new GloryCard(
		34,
		[
			new SetIdRarity(
				34,
				CardSet.MAGIC_GLORY_1,
				CardRarity.MYTHIC,
			)
		],
		'Council of Fame and Fortune',
		[],
		[
			CardColors.BLACK,
			CardColors.RED,
		],
		[
			CardSuperTypes.LEGENDARY,
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[
			CardSubTypes.COUNCIL,
		],
		`${ReminderTexts.LEGENDARY_INSTANT}<br><br>`
		+ `Split Second ${ReminderTexts.SPLIT_SECOND}<br><br>`
		+ 'Each Player secretly votes for Fame or Fortune, then those votes are revealed.<br>If Fame gets more votes, each player casts their commander for free, the cast resolution cannot be prevented in any way, and commander tax isn\'t accumulated. For each commander that was already on the battlefield, they gain Vigilance, Reach, First strike and trample, their base power and toughness are set to 10.<br>If Fortune gets more votes or is tied for more votes, each player gets a gold token equal to the total commander tax of the table.',
		'https://mtg.design/i/vglq18.jpg',
		'',
		'',
		'',
		[
			ReminderTexts.LEGENDARY_INSTANT_RULINGS,
		]
	),
	new GloryCard(
		35,
		[
			new SetIdRarity(
				35,
				CardSet.MAGIC_GLORY_1,
				CardRarity.MYTHIC,
			)
		],
		'Council of Feast and Famine',
		[],
		[
			CardColors.BLACK,
			CardColors.GREEN,
		],
		[
			CardSuperTypes.LEGENDARY,
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[
			CardSubTypes.COUNCIL,
		],
		`${ReminderTexts.LEGENDARY_INSTANT}<br><br>`
		+ `Split Second ${ReminderTexts.SPLIT_SECOND}<br><br>`
		+ 'Each Player secretly votes for Feast or Famine, then those votes are revealed.<br>If Feast gets more votes, each player chooses a creature they control and a creature they don\'t control.Those creatures fight.Each creature can only be chosen by their controller once.Repeat this process until every creature has been chosen by its controler.If a creature died as a result of a fight, each player creates a food token.<br>If Famine gets more more votes, or is tied for more votes, destroy all foods.',
		'https://mtg.design/i/ulnu98.jpg',
		'',
		'',
		'',
		[
			ReminderTexts.LEGENDARY_INSTANT_RULINGS,
			'First the player whose turn it is chooses which creatures two creatures to fight, those creatures fight, then each other player in turn order does the same. Each player will select only two creatures at a time and then pass the choice to the next player in turn order. Repeat this untill every creature still on the battlefield has been chosen by their controller at least once. After that each player creates a number of food tokens equal to the total number of creatures that died.'
		]
	),
	new GloryCard(
		36,
		[
			new SetIdRarity(
				36,
				CardSet.MAGIC_GLORY_1,
				CardRarity.MYTHIC,
			)
		],
		'Council of Hearth and Home',
		[],
		[
			CardColors.GREEN,
			CardColors.WHITE,
		],
		[
			CardSuperTypes.LEGENDARY,
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[
			CardSubTypes.COUNCIL,
		],
		`${ReminderTexts.LEGENDARY_INSTANT}<br><br>`
		+ `Split Second ${ReminderTexts.SPLIT_SECOND}<br><br>`
		+ 'Each Player secretly votes for Hearth or Home, then those votes are revealed.<br>If Hearth gets more votes, each player may sacrifice any number of creatures. Create a Wastes token per creature sacrificed this way. Then each player can put on the battlefield tapped a number of lands equal to the greatest power or toughness amongst all creatures on the battlefield.<br>If Home gets more votes, or is tied for more votes, each player must exile all creatures they control, then return those cards to the battlefield under their owner\'s control.',
		'https://mtg.design/i/ojns94.jpg',
		'',
		'',
		'',
		[
			ReminderTexts.LEGENDARY_INSTANT_RULINGS,
			'This effect starts resolving with the player whose turn it is.',
			'The number of tapped lands put on the battlefield is equal to the greatest power or toughness amongst all creatures on the battlefield, whichever value is the greatest.',
			'Council of Hearth and Home creates a token that\'s a copy of the card <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=665822" target="_blank">Wastes</a> in the Oracle card reference. Official text for <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=665822" target="_blank">Wastes</a> can be found using the Gatherer card database at Gatherer.Wizards.com.'
		]
	),
	new GloryCard(
		37,
		[
			new SetIdRarity(
				37,
				CardSet.MAGIC_GLORY_1,
				CardRarity.MYTHIC,
			)
		],
		'Council of Luck and Skill',
		[],
		[
			CardColors.BLUE,
			CardColors.RED,
		],
		[
			CardSuperTypes.LEGENDARY,
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[
			CardSubTypes.COUNCIL,
		],
		`${ReminderTexts.LEGENDARY_INSTANT}<br><br>`
		+ `Split Second ${ReminderTexts.SPLIT_SECOND}<br><br>`
		+ 'Each Player secretly votes for Luck or Skill, then those votes are revealed.<br>If Luck gets more votes, you flip a coin for each permanent on the battlefield, if it comes up heads you create a token that\'s a copy of it, if it comes up tails, its controller sacrifices it.<br>If Skill gets more votes, or is tied for more votes, each player sacrifices a permanent, then for each opponent that player creates a token of the sacrificed permanent.',
		'https://mtg.design/i/jsvp73.jpg',
		'',
		'',
		'',
		[
			ReminderTexts.LEGENDARY_INSTANT_RULINGS,
			'This effect starts resolving with the player whose turn it is.',
			'If Skill is resolved, then each player sacrifices a permament, then creates an ammount of token copies of that permanent equal to the ammount of opponents that player has.'
		]
	),
	new GloryCard(
		38,
		[
			new SetIdRarity(
				38,
				CardSet.MAGIC_GLORY_1,
				CardRarity.MYTHIC,
			)
		],
		'Council of Truth and Justice',
		[],
		[
			CardColors.WHITE,
			CardColors.BLUE,
		],
		[
			CardSuperTypes.LEGENDARY,
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[
			CardSubTypes.COUNCIL,
		],
		`${ReminderTexts.LEGENDARY_INSTANT}<br><br>`
		+ `Split Second ${ReminderTexts.SPLIT_SECOND}<br><br>`
		+ 'Each Player secretly votes for Truth or Justice, then those votes are revealed.<br>If Truth gets more votes, Each player discards their hand, then draws cards equal to thetotal number of cards discarded this way.<br>If Justice gets more votes, or is tied for more votes, each player chooses a number of creatures they control equal to the number of creatures controlled by the player who controls the fewest, then sacrifices the rest. Repeat this process for Artifacts and Enchantments.',
		'https://mtg.design/i/kqla19.jpg',
		'',
		'',
		'',
		[
			ReminderTexts.LEGENDARY_INSTANT_RULINGS,
			'This effect starts resolving with the player whose turn it is.',
			'If Justice is voted, First the player whose turn it is chooses which creatures (if any) to keep, then each other player in turn order does the same. Each player will know the choices made by the players who chose before them. All of the unchosen creatures are then sacrificed simultaneously. The process is repeated for artifacts and then enchantments, one at the time. Players will again know earlier choices made when deciding what to sacrifice.',
			'Each type of object is counted during the corresponding part of the process. Enchantments on the battlefield are counted after Creatures have been sacrificed, and Enchantments on the battlefield are counted after Artifacts have been sacrificed. Thus, an Artifact Creature or Enchantment Creature sacrificed to the first part of the spell would not be counted when determining how many Artifacts or Enchantments are on the battlefield for next parts of the spell.'
		]
	),
	new GloryCard(
		39,
		[
			new SetIdRarity(
				39,
				CardSet.MAGIC_GLORY_1,
				CardRarity.MYTHIC,
			)
		],
		'Council of War and Peace',
		[],
		[
			CardColors.RED,
			CardColors.WHITE,
		],
		[
			CardSuperTypes.LEGENDARY,
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[
			CardSubTypes.COUNCIL,
		],
		`${ReminderTexts.LEGENDARY_INSTANT}<br><br>`
		+ `Split Second ${ReminderTexts.SPLIT_SECOND}<br><br>`
		+ 'Each Player secretly votes for War or Peace, then those votes are revealed.<br>If War gets more votes, put a goad counter on each artifact, enchantment and creature on the battlefield. <i>(Permanents with goad counters cannot attack the player to their controller\'s right and are X/X Creatures in addition to their other type if they weren\'t, where X is their mana value.)</i><br>If Peace gets more votes, or is tied for more votes, creatures can\'t attack until the next turn, then each player gives a permanent of their choice to the player to their right.',
		'https://mtg.design/i/vcvi60.jpg',
		'',
		'',
		'',
		[
			ReminderTexts.LEGENDARY_INSTANT_RULINGS,
			'This effect starts resolving with the player whose turn it is.',
			'Goad counters do not exist in regular Magic: The Gathering rules, as goading a creature requires a subject that goaded the creature, so that the creature cannot attack that subject. As such we treat the player to the right, even if it changes, as the goading subject.',
			'Permanents with goad counters are goaded while the counter is on them.',
			'Permanents with goad counters, become creatures in addition to their other types with X power and X toughness where X is their mana value.',
			'Giving a permanent is simply changing controller\'s, the permanent isn\'t leaving or entering the battlefield.'
		]
	),
	new GloryCard(
		40,
		[
			new SetIdRarity(
				40,
				CardSet.MAGIC_GLORY_1,
				CardRarity.COMMON,
			)
		],
		'Critical Hit',
		[],
		[
			CardColors.BLUE,
			CardColors.BLACK,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[],
		'Target creature gains a Deathtouch counter.<br><br>Until the end of this turn:<ul><li>Whenever a creature dealt damage by this creature dies, draw two cards;</li><li>Whenever a player dealt damage by this creature loses the game, scry 3 then draw 2;</li><li>Creatures with Deathtouch have Toxic 1.</li></ul>',
		'https://mtg.design/i/tbzw00.jpg',
		'"I\'ve had something up my sleeve"',
		'',
		'',
		[
			'All the modes in the card last until the end of the turn this card was cast.',
		]
	),
	new GloryCard(
		41,
		[
			new SetIdRarity(
				41,
				CardSet.MAGIC_GLORY_1,
				CardRarity.UNCOMMON,
			)
		],
		'Criticalest Hit',
		[],
		[
			CardColors.BLUE,
			CardColors.BLACK,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[],
		'Target creature gains a Deathtouch counter.<br>Until the end of the turn, creatures with deathtouch dealing combat damage to players, cause those players to lose half of their life rounded up instead.<br>If you\'ve cast another spell named Critical Hit this turn, creatures with deathtouch dealing combat damage to players cause those players to lose the game.',
		'https://mtg.design/i/pbkw58.jpg',
		'',
		'',
		'',
		[
			'If no card named "Critical Hit" or "Criticalest Hit" has resolved this turn before this card\'s resolution, dealing combat damage with creatures with Deathtouch causes the damaged players to lose half of their life rounded up.',
			'If at least one card named "Critical Hit" or "Criticalest Hit" has resolved this turn before this card\'s resolution, dealing combat damage with creatures with Deathtouch causes the damaged players to lose the game.',
		]
	),
	new GloryCard(
		42,
		[
			new SetIdRarity(
				42,
				CardSet.MAGIC_GLORY_1,
				CardRarity.COMMON,
			)
		],
		'Forced retirement Plan',
		[],
		[
			CardColors.BLUE,
			CardColors.RED,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[],
		'Exile the top two cards of target player\'s library.<br>You and target player may play them until the end of your next turn.<br>If the exiled cards types match any other card type exiled this way, you may copy this spell for each card type exiled this way.<br>You may choose new targets for the copies.<br>If this spell has exiled exactly 20 cards and there aren\'t other copies waiting to be resolved, you lose the game.',
		'https://mtg.design/i/ncif14.jpg',
		'"MY SAVINGS!? WHERE DID THEY GO!?',
		'',
		'',
		[
			'To copy this spell, match the card types of the cards still in exile exiled by cards named "Forced Retirement Plan", or its copies, and if any card type was exiled 2 or more times, copy the current "Forced Retirement Plan" X times, where X is the number of card types with 2 or more cards exiled this way. Do the same for its copies.',
		]
	),
	new GloryCard(
		43,
		[
			new SetIdRarity(
				43,
				CardSet.MAGIC_GLORY_1,
				CardRarity.COMMON,
			)
		],
		'Glorious Combat',
		[],
		[
			CardColors.RED,
			CardColors.GREEN,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.SORCERY,
		],
		[],
		'Name two players in the game.<br>Secretly choose one between Mana Cost, Power or Toughness.<br>Then the two named players will secretly pick a creature they control.<br>You secretly pick one of the two named players.<br>Everyone reveals their picks at the same time.<br>The two players compare their creatures using the attribute you secretly chose.<br>If the player you secretly picked won, you get 15 Gold tokens and the chosen player gets 5 gold tokens.Otherwise everyone else gets 10 gold tokens.<br>If a player fails to maintain the secrecy of their choices, they lose the game.',
		'https://mtg.design/i/tess23.jpg',
		'',
		'',
		'',
		[
			'To secretly pick is to write your answers somewhere they can\'t be changed on the spot.',
			'When you choose between Mana Cost, Power or Toughness, you\'re choosing the attribute that the two players will compare.',
			'If one of the two players doesn\'t have any creature to compare, that player automatically the sub game.',
			'When the two players compare creatures, they\'ll compare which creature has the highest mana value, highest power or highest toughness depending on which attribute you chose.',
			'Everyone else referes to all other players besides you and the player you chose.',
		]
	),
	new GloryCard(
		44,
		[
			new SetIdRarity(
				44,
				CardSet.MAGIC_GLORY_1,
				CardRarity.COMMON,
			)
		],
		'Grandpa\'s Watch',
		[],
		[
			CardColors.WHITE,
			CardColors.BLUE,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.SORCERY,
		],
		[],
		'Target Player searches their library for an artifact with a mana ability and puts it onto the battlefield, they shuffle their library afterwards.',
		'https://mtg.design/i/qrrl92.jpg',
	),
	new GloryCard(
		45,
		[
			new SetIdRarity(
				45,
				CardSet.MAGIC_GLORY_1,
				CardRarity.COMMON,
			)
		],
		'It\'s a "Miracle!"',
		[],
		[
			CardColors.WHITE,
			CardColors.BLUE,
			CardColors.BLACK,
			CardColors.RED,
			CardColors.GREEN,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.SORCERY,
		],
		[],
		'Copy target permanent.<br>The copy is a token, except the token isn\'t legendary if the copied permanent is Legendary, its name is "Miracle!" and the following effect in addition to the effects it copied:<br>"When it enters you lose half your life rounded up, if your life is less than 20 afterwards, you lose the game. This copy has Vanishing 3, Vigilance, Reach, Trample and Protection from Everything as long as it is being represented on a drawing or on a dry-erase card <i>(e.g. an Inifitoken)</i> and if the original card I\'m copying would leave the battle field while I\'m on the battlefield, gain control of it instead."<br><br>You may cast It\'s a "Miracle!" as though it had flash.<br>If you do "Miracle!" gains haste and sacrifice it at the beginning of the next end step.',
		'https://mtg.design/i/kvea63.jpg',
		'"JESUS! CHRIST!" - Jesus Christ, probably.',
		'',
		'',
		[
			'If It\'s a "Miracle!" is cast as though it had flash, the token copy and any copies of the copy gain haste and are sacrificed at the beginning of the next endstep.',
			'The copy retains all the types of the original\'s types.',
			'The copy isn\'t legendary if it was legendary and the token\'s name is "Miracle!".',
			'When the copy token enters you lose half your life rounded up, and if your life total is 20 or lower due to this effect, you lose the game.',
			'If the permanent "Miracle!" is copying would leave the battlefield while "Miracle!" is on the battlefield, the controler of "Miracle!" gains control of that permament instead.',
			'If you already control the permanent that "Miracle!" is copying, and it would leave the battlefield, you gain control of it again and prevent it from leaving the battlefield.',
			'While this token is being represented on a drawing or on a dry-erase card, this token has Vanishing 3, Vigilance, Reach, Trample and Protection from Everything in addition to the original text box.',
			'While this token is being represented on anything else, it only has the text box of the permanent it copied.',
		]
	),
	new GloryCard(
		46,
		[
			new SetIdRarity(
				46,
				CardSet.MAGIC_GLORY_1,
				CardRarity.RARE,
			)
		],
		'Johnny\'s Guidance',
		[],
		[
			CardColors.BLUE,
			CardColors.BLACK,
		],
		[
			CardSuperTypes.LEGENDARY,
			CardSuperTypes.WORLD,
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.ENCHANTMENT,
		],
		[],
		`${ReminderTextsWithURLs.COMBO_STAR} - A Player plays 3 or more cards in a turn, A player has 2 or more spells in the stack<br><br>Sacrifice Johnny\'s Guidance: If Johnny\'s Guiance had 5 or more combo counters on it, you get an emblem with "All instants and glory instants have Storm. Whenever a player casts a sorcery or Glory sorcery, each player copies that sorcery for each time they\'ve cast their commander this game. Enter the battlefield triggers trigger thrice."`,
		'https://mtg.design/i/wlpd94.jpg',
	),
	new GloryCard(
		47,
		[
			new SetIdRarity(
				47,
				CardSet.MAGIC_GLORY_1,
				CardRarity.COMMON,
			)
		],
		'Luuuucky!',
		[],
		[
			CardColors.BLACK,
			CardColors.RED,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[],
		'Create 2 Treasure Tokens<br>Revolt - Create 3 Treasure Tokens and Draw a card instead if a permanent left the battlefield under your control this turn.',
		'https://mtg.design/i/kkxy44.jpg',
		'"ARE YOU NOT ENTERTAINED!?"'
	),
	new GloryCard(
		48,
		[
			new SetIdRarity(
				48,
				CardSet.MAGIC_GLORY_1,
				CardRarity.COMMON,
			)
		],
		'Magic trick',
		[],
		[
			CardColors.BLUE,
			CardColors.BLACK,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[],
		'Target Player gains 3 mana in any combination of colors. 2 extra blue or black mana if the only colors chosen were blue or black.<br><br>If you would lose unspent mana created by Magic trick, create that many Treasure Tokens instead.',
		'https://mtg.design/i/tjif12.jpg',
		'"The green player plays 3 lands and nobody bats an eye! But if the Black player spends one black mana to gain 3 more mana then Society....!"'
	),
	new GloryCard(
		49,
		[
			new SetIdRarity(
				49,
				CardSet.MAGIC_GLORY_1,
				CardRarity.UNCOMMON,
			)
		],
		'Main Character Hammer',
		[
			CostPips.GENERIC_1,
			CostPips.PHYREXIAN_WHITE,
			CostPips.PHYREXIAN_BLACK,
		],
		[
			CardColors.WHITE,
			CardColors.BLACK,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.ARTIFACT,
		],
		[
			CardSubTypes.EQUIPMENT
		],
		'Flash<br>When Main Character Hammer enters, Main Character Hammer and target Permanent gain hexproof.<br><i class="ms ms-wp ms-cost ms-shadow"></i>: Return Main Character hammer, all cards attached to it and the card it is equiped onto to their owner\'s hands.<br><i class="ms ms-bp ms-cost ms-shadow"></i>, Sacrifice a creature: Until end of turn, equiped Creature has the types and text box of the sacrificed creature in addition to its own textbox and types.<br>Equip <i class="ms ms-1 ms-cost ms-shadow"></i>',
		'https://mtg.design/i/fniu40.jpg',
		'"...Can\'t touch this!"'
	),
	new GloryCard(
		50,
		[
			new SetIdRarity(
				50,
				CardSet.MAGIC_GLORY_1,
				CardRarity.UNCOMMON,
			)
		],
		'One with za warudo!',
		[],
		[
			CardColors.GREEN,
			CardColors.BLUE,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[],
		`Cleave <i class="ms ms-gp ms-cost ms-shadow"></i><i class="ms ms-up ms-cost ms-shadow"></i>${ReminderTexts.CLEAVE}<br><br>Until the end of turn, [your] Spells cannot be countered [by blue spells or abilities].`,
		'https://mtg.design/i/usur66.jpg',
		'"The trees speak to me..."'
	),
	new GloryCard(
		51,
		[
			new SetIdRarity(
				51,
				CardSet.MAGIC_GLORY_1,
				CardRarity.COMMON,
			)
		],
		'Protein, Creatine and Steroi-',
		[],
		[
			CardColors.GREEN,
			CardColors.BLUE,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[],
		'Poliferate, poliferate and poliferate.',
		'https://mtg.design/i/ipsj66.jpg',
		'"Trust me bruh, it\'s just chicken and rice, chicken and rice!"'
	),
	new GloryCard(
		52,
		[
			new SetIdRarity(
				52,
				CardSet.MAGIC_GLORY_1,
				CardRarity.UNCOMMON,
			)
		],
		'Pull the plug',
		[],
		[
			CardColors.BLUE,
			CardColors.BLACK,
			CardColors.RED,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[],
		`Split Second ${ReminderTexts.SPLIT_SECOND}<br>End The turn.`,
		'https://mtg.design/i/lxfg01.jpg',
		'"WHAT HAPPENED TO MY TV!?"'
	),
	new GloryCard(
		53,
		[
			new SetIdRarity(
				53,
				CardSet.MAGIC_GLORY_1,
				CardRarity.COMMON,
			)
		],
		'Rich Uncle Heritage',
		[],
		[
			CardColors.WHITE,
			CardColors.BLACK,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.SORCERY,
		],
		[],
		'Multikicker <i class="ms ms-wp ms-cost ms-shadow"></i><i class="ms ms-bp ms-cost ms-shadow"></i><i>(You may pay an additional <i class="ms ms-wp ms-cost ms-shadow"></i><i class="ms ms-bp ms-cost ms-shadow"></i> any number of times as you cast this spell.)</i><br>Target player searchers their library for up to two basic land cards, reveal those cards, put them into your hand, then shuffle.<br>Repeat this process for each time it was kicked.',
		'https://mtg.design/i/oegv37.jpg',
		'"Uncle Stark..."'
	),
	new GloryCard(
		54,
		[
			new SetIdRarity(
				54,
				CardSet.MAGIC_GLORY_1,
				CardRarity.UNCOMMON,
			)
		],
		'Sky Fall',
		[],
		[
			CardColors.WHITE,
			CardColors.BLACK,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.SORCERY,
		],
		[],
		'This spell cannot be removed from the stack.<br>Choose any creature, planeswalker, player or battle to distribute 10 damage to in ALL multiplayer Magic: The Gathering games happening right now.',
		'https://mtg.design/i/lnya86.jpg',
		'"Where you go I go. What you see, I see..."',
		'',
		'',
		[
			'Choosing specifically does not use the word "target", therefore it can bypass effects such as Hexproof, Shroud, Protections and does not trigger Ward. As these effects require the object affected by these effects to be "targeted".'
		]
	),
	new GloryCard(
		55,
		[
			new SetIdRarity(
				55,
				CardSet.MAGIC_GLORY_1,
				CardRarity.UNCOMMON,
			)
		],
		'That\'s the sound of the Police',
		[],
		[
			CardColors.BLUE,
			CardColors.RED,
			CardColors.WHITE,
		],
		[
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.INSTANT,
		],
		[],
		`Split Second ${ReminderTexts.SPLIT_SECOND}<br>Opponents who have the most or tied for most cards in hand, life total, permanents on their battlefield, and/or cards in their graveyard, lose 5 life each.<br>Opponent who has the least or tied for least commander tax between individual commanders and / or cards in their graveyard, lose 5 life each.<br>You gain life equal to the life lost this way.`,
		'https://mtg.design/i/bslb25.jpg',
		'"Woop-woop, that\'s the sound of da beast"',
		'',
		'',
		[
			'Each criteria is counted individually, meaning that if the same opponent matches 2 or more criteria then they lose 5 life times the amount of times they match the criteria. For example, if a singular opponent is simultaneously the opponent with the most life total, least cards in their graveyard and the most permanents on the battlefield, then that opponent will lose 15 total life.',
			'In cases where players are playing with multiple commanders in the commandzone <i>(e.g. Partners)</i> each commander tax is counted individually towards the effect of That\'s the sound of the Police.',
			'If two or more opponents are tied for the same mode, both opponents lose 5 life.'
		]
	),
	new GloryCard(
		56,
		[
			new SetIdRarity(
				56,
				CardSet.MAGIC_GLORY_1,
				CardRarity.MYTHIC,
			)
		],
		'The Honoured One',
		[],
		[
			CardColors.BLUE,
			CardColors.RED,
		],
		[
			CardSuperTypes.LEGENDARY,
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.PLANESWALKER,
		],
		[
			CardSubTypes.THE_HONOURED_ONE
		],
		'When you would create one or more tokens, cast a spell with two or more different colored mana symbols in its cost, deal noncombat damage, draw one or more cards or discard one or more cards, also add a loyalty counter to The Honoured One.<br><br>+1: Scry  2. Draw 3 cards. Discard 1 Glory card. If you can\'t discard, double The Honoured One\'s loyalty counters instead.<br><br>-20: You get an emblem with "Choose a commander that you own in the command zone, battlefield, exile or graveyard. Your creatures enter as 5/5 copies of the that commander, except it isn\'t legendary.The copy gains Flying, Double strike, Hexproof, Menace, Haste and is a creature in addition to its other types."',
		'https://mtg.design/i/vjxt17.jpg',
		'',
		'',
		'',
		[
			'Whenever you would create one or more tokens, you create that many tokens and add one loyalty counter to The Honoured One. Repeat this for whenever you would cast a spell with two or more different colored mana symbols in its cost, whenever you would deal noncombat damage, whenever you would draw one or more cards and whenever you would discard one or more cards.',
			'Casting a spell with two or more different colored mana symbols in its cost means casting a spell who\'se mana symbols are at least of two different colors. For example <i class="ms ms-r ms-cost ms-shadow"></i><i class="ms ms-u ms-cost ms-shadow"></i><i class="ms ms-u ms-cost ms-shadow"></i>.',
			'When resolving the +1 ability, if you cannot discard Glory cards for any reason, you double the amount of Loyalty counters on The Honoured One instead.',
		],
		5,
	),
	new GloryCard(
		57,
		[
			new SetIdRarity(
				57,
				CardSet.MAGIC_GLORY_1,
				CardRarity.RARE,
			)
		],
		'The Ur-Dragon\'s Amusement',
		[],
		[
			CardColors.WHITE,
			CardColors.BLUE,
			CardColors.BLACK,
			CardColors.RED,
			CardColors.GREEN,
		],
		[
			CardSuperTypes.LEGENDARY,
			CardSuperTypes.WORLD,
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.ENCHANTMENT,
		],
		[],
		`${ReminderTextsWithURLs.COMBO_STAR} - Cards with subtypes entering the battlefield<br><br>Sacrifice The Ur - Dragon\'s Amusement: If The Ur-Dragon\'s Amusement had 25 or more combo counters on it, you get an emblem with "Every player\'s spell with a subtype costs {1} less to be cast for each permanent with a subtype on the battlefield. If a player puts a nonland nontoken permanent on the battlefield that has a subtype without casting it other by this effect, that player faces a villanous choice - Take 11 commander damage From The Ur-Dragon without losing life or let all other players in the table put a permanent with a subtype on the battlefield from where that player\'s permanent came from with equal or less converted mana cost".`,
		'https://mtg.design/i/xlvt35.jpg',
		'',
		'',
		'',
		[
			'A subtype are card types in front of the \'-\' in a card, such as \'Goblin\', \'Elf\', \'Equipment\', \'Aura\', \'Arcane\', \'Curse\' and many others.',
			'"The Ur-Dragon" that deals commander damage is a different entity from any Ur-Dragon on the table. It is a commander damage stat that should be tracked in addition to all other commander damage stats on the table.',
			'The emblem allows players to put permanents with a subtype on the battlefield without casting them if another player put a nonland nontoken permanent on the battlefield without casting it and if that player has chosen the second mode of the villanous choice. If a permanent with a subtype was put on the battlefield with the effect of this emblem, this emblem does not trigger.',
			'Whenever a player puts a nonland nontoken permanent with a subtype on the battlefield without casting it, and if the player chooses the second mode of the villanous choice, all other players can put a permanent with a subtype on the battlefield as long as it came from the same place as the permanent that caused this emblem to trigger. For example if the player reanimated a creature, all other players can put a permanent with a subtype from their graveyards onto the battlefield.'
		],
	),
	new GloryCard(
		58,
		[
			new SetIdRarity(
				58,
				CardSet.MAGIC_GLORY_1,
				CardRarity.RARE,
			)
		],
		'Timmy\'s Fun',
		[],
		[
			CardColors.RED,
			CardColors.GREEN,
		],
		[
			CardSuperTypes.LEGENDARY,
			CardSuperTypes.WORLD,
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.ENCHANTMENT,
		],
		[],
		`${ReminderTextsWithURLs.COMBO_STAR} - A Creature with 5 or more Mana Cost entering the battlefield, a player losing 10 or more life through combat<br><br>Sacrifice Timmy\'s Fun: If Timmy\'s fun had 5 or more combo counters on it, you get an emblem with "At the beginning of each player\'s upkeep put a counter on this emblem. All Creatures have +1/+1 for each counter on this emblem. All creatures have haste if this emblem has 5 or more counters, Trample if it has 10 or more and Double Strike if this emblem has 15 or more counters."`,
		'https://mtg.design/i/zhyl50.jpg',
	),
	new GloryCard(
		59,
		[
			new SetIdRarity(
				59,
				CardSet.MAGIC_GLORY_1,
				CardRarity.MYTHIC,
			)
		],
		'Jesus Fucking Christ, Riding a T Fucking Rex',
		[
			' 5 / ',
			CardColors.WHITE,
			' 5 / ',
			CardColors.BLUE,
			' 5 / ',
			CardColors.BLACK,
			' 5 / ',
			CardColors.RED,
			' 5 / ',
			CardColors.GREEN,
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
		],
		[
			CardColors.WHITE,
			CardColors.BLUE,
			CardColors.BLACK,
			CardColors.RED,
			CardColors.GREEN,
		],
		[
			CardSuperTypes.LEGENDARY,
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.ENCHANTMENT,
			CardTypes.CREATURE
		],
		[
			CardSubTypes.HUMAN,
			CardSubTypes.DEMIGOD,
			CardSubTypes.DINOSAUR,
		],
		'Vigilance, Reach, Trample, Haste, Islandwalk<br>When Jesus Fucking Christ, Riding a T Fucking Rex enters the battlefield, draw a card for each time any commander has been cast from the command zone this game.<br>Dinosaurs are indestructible.<br>Each land is an Island in addition to its other land types.<br>If Jesus Fucking Christ, Riding a T Fucking Rex would die, exile it with 3 time counters instead.It gains Suspend.<br>Jesus Fucking Christ, Riding a T Fucking Rex cannot be your commander.',
		'https://mtg.design/i/ypgx71.jpg',
		'',
		'12',
		'25',
		[],
		0,
		new Date('2025-06-09')
	),

	new GloryCard(
		60,
		[
			new SetIdRarity(
				60,
				CardSet.MAGIC_GLORY_1,
				CardRarity.MYTHIC,
			)
		],
		'Jesus Fucking Christ, Riding a T Fucking Rex',
		[
			CostPips.HYBRID_2_WHITE,
			CostPips.HYBRID_2_BLUE,
			CostPips.HYBRID_2_BLACK,
			CostPips.HYBRID_2_RED,
			CostPips.HYBRID_2_GREEN,
			'',
			'',
			'',
			'',
			'',
		],
		[
			CardColors.WHITE,
			CardColors.BLUE,
			CardColors.BLACK,
			CardColors.RED,
			CardColors.GREEN,
		],
		[
			CardSuperTypes.LEGENDARY,
			CardSuperTypes.GLORY,
		],
		[
			CardTypes.KINDRED,
			CardTypes.SORCERY
		],
		[
			CardSubTypes.GOD,
		],
		`${ReminderTexts.LEGENDARY_SORCERY}<br>Choose one or more -<ul><li>Destroy all nonbasic nonisland lands.</li><li>Exile all Dinosaurs.</li><li>Destroy all creatures.They can\'t be regenerated.</li><li>Set the time counters of all cards your opponents have in suspend to equal to the difference in days between today and the next 3rd of April in the calendar. <i>(Include today and the next 3rd of April in the calculations)</i></li></ul>`,
		'https://mtg.design/i/uewu27',
		'"Dinosaurs took too long to create White Monster, so I\'m giving way to Mankind." - Said the Wrathful God. ',
		'',
		'',
		[
			ReminderTexts.LEGENDARY_SORCERY_RULINGS,
		],
		0,
		new Date('2025-06-09')
	)
];
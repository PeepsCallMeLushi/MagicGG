import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BoardsUrls } from '../../shared/enum/boards-urls';
import { SetURLs } from '../../shared/enum/set-urls';

export interface MagicGGFormats {
	formatVersion: string
	formatName: string;
	yearMonth: string;
	setsAndBoardUsed: string[];
	specialRules: string[];
}

@Component({
  selector: 'app-glory-formats',
  imports: [
	MatTableModule,
  ],
  standalone: true,
  templateUrl: './glory-formats.component.html',
  styleUrl: './glory-formats.component.scss'
})
export class GloryFormatsComponent {

	public readonly displayedColumns = [
		'formatVersion',
		'formatName',
		'yearMonth',
		'setsAndBoardUsed',
	]

	public readonly formats: MagicGGFormats[] = [
		{
			formatVersion: 'Alpha',
			formatName: 'Xmas Party 2024',
			yearMonth: '2024 / 12',
			setsAndBoardUsed: [
				BoardsUrls.ALPHA_BOARD,
				'Custom Set'
			],
			specialRules: [
				'Every Magic Glory card has split second'
			]
		},
		{
			formatVersion: 'Beta',
			formatName: 'Summer Jam 2025',
			yearMonth: '2025 / 06',
			setsAndBoardUsed: [
				BoardsUrls.ALPHA_BOARD,
				SetURLs.MG1,
				SetURLs.CG1,
				SetURLs.FF1,
			],
			specialRules: [
				'End of Day happens after the group has had dinner, the next day starts at that time',
				'All players start the day with their hands maxed out',
				'Maximum Shared Handsize of 12 cards between glory and conspiracy cards',
				'Custom cards called Glory Cards and Conspiracy Cards share the same deck which is called the Glory Deck',
				'Normal Arch-Enemy cards are used to form the Arch-Enemy Deck',
				'Friend Conspiracies and Foe Conspiracies do not count towards handsize',
				'1 Mythic Glory card, Friend Conspiracy and Foe Conspiracy cards each per person',
				'2 Rare Cards per person',
				'Players must have different people as their friends and foes',
				'Players cannot be their own designated friend nor their own designated foe',
				'If landing on a =) house, draw a card from the Glory Deck (Player Card Slot)',
				'If landing on a =( house, draw a card from the Arch-Enemy Deck (CHAOS!! Slot)',
				'If landing on a house within the Annihilator Zone, remove a number of game objects from the game you\'re currently playing equal to the number in the house. If you can\'t move back to the starting house and roll a dice, move BACK the result.',
				'If landing on a empty house, flip a coin and call a result. You may also use a dice instead, even equals heads, odd equals tails. If you won, teleport to the nearest empty house, do not repeat this effect. If you lost move to the start of the annihilator zone and roll a dice. The start is the 1 inside the annihilator zone, nearest to the START house',
			]
		}
	];

}

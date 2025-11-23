import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { QuestCount } from '../../shared/models/quest-count.model';
import { BingCardComponent } from './bing-card/bing-card.component';

@Component({
	selector: 'app-bing-randomizer',
	imports: [
    BingCardComponent,
    NgIf,
    NgFor,
    MatButtonModule,
    MatExpansionModule,
    MatGridListModule,
    MatInputModule,
    ReactiveFormsModule,
],
	templateUrl: './bing-randomizer.component.html',
	styleUrl: './bing-randomizer.component.scss'
})
export class BingRandomizerComponent implements OnInit {

	public inputHandler: FormGroup = new FormGroup({
		neutral: new FormControl<number>(0),
		white: new FormControl<number>(0),
		blue: new FormControl<number>(0),
		black: new FormControl<number>(0),
		red: new FormControl<number>(0),
		green: new FormControl<number>(0),
	});

	public neutralQuests: QuestCount[] = [];
	public whiteQuests: QuestCount[] = [];
	public blueQuests: QuestCount[] = [];
	public blackQuests: QuestCount[] = [];
	public redQuests: QuestCount[] = [];
	public greenQuests: QuestCount[] = [];
	public bingQuests: QuestCount[] = [];
	public pastBingQuests: QuestCount[][] = [];

	public ngOnInit(): void {
		if (localStorage.getItem('inputHandler')) {
			const handler = localStorage.getItem('inputHandler')
				? JSON.parse(localStorage.getItem('inputHandler') as string)
				: {
					neutral: 0,
					white: 0,
					blue: 0,
					black: 0,
					red: 0,
					green: 0,
				};
			this.inputHandler.patchValue(handler);
		}
		if (localStorage.getItem('neutralQuests')) {
			const neutralQuests = localStorage.getItem('neutralQuests')
				? JSON.parse(localStorage.getItem('neutralQuests') as string)
				: [];
			this.neutralQuests = neutralQuests;
		}
		if (localStorage.getItem('whiteQuests')) {
			const whiteQuests = localStorage.getItem('whiteQuests')
				? JSON.parse(localStorage.getItem('whiteQuests') as string)
				: [];
			this.whiteQuests = whiteQuests;
		}
		if (localStorage.getItem('blueQuests')) {
			const blueQuests = localStorage.getItem('blueQuests')
				? JSON.parse(localStorage.getItem('blueQuests') as string)
				: [];
			this.blueQuests = blueQuests;
		}
		if (localStorage.getItem('blackQuests')) {
			const blackQuests = localStorage.getItem('blackQuests')
				? JSON.parse(localStorage.getItem('blackQuests') as string)
				: [];
			this.blackQuests = blackQuests;
		}
		if (localStorage.getItem('redQuests')) {
			const redQuests = localStorage.getItem('redQuests')
				? JSON.parse(localStorage.getItem('redQuests') as string)
				: [];
			this.redQuests = redQuests;
		}
		if (localStorage.getItem('greenQuests')) {
			const greenQuests = localStorage.getItem('greenQuests')
				? JSON.parse(localStorage.getItem('greenQuests') as string)
				: [];
			this.greenQuests = greenQuests;
		}

	}

	public generateQuests(): void {
		this.neutralQuests = [];
		this.whiteQuests = [];
		this.blueQuests = [];
		this.blackQuests = [];
		this.redQuests = [];
		this.greenQuests = [];

		for (let i = 1; i <= this.getFormControl("neutral").value; i += 1) {
			this.neutralQuests.push(new QuestCount('N', '' + i, 0));
		}
		for (let i = 1; i <= this.getFormControl("white").value; i += 1) {
			this.whiteQuests.push(new QuestCount('W', '' + i, 0));
		}
		for (let i = 1; i <= this.getFormControl("blue").value; i += 1) {
			this.blueQuests.push(new QuestCount('U', '' + i, 0));
		}
		for (let i = 1; i <= this.getFormControl("black").value; i += 1) {
			this.blackQuests.push(new QuestCount('B', '' + i, 0));
		}
		for (let i = 1; i <= this.getFormControl("red").value; i += 1) {
			this.redQuests.push(new QuestCount('R', '' + i, 0));
		}
		for (let i = 1; i <= this.getFormControl("green").value; i += 1) {
			this.greenQuests.push(new QuestCount('G', '' + i, 0));
		}

		localStorage.setItem('inputHandler', JSON.stringify(this.inputHandler.value));
		localStorage.setItem('neutralQuests', JSON.stringify(this.neutralQuests));
		localStorage.setItem('whiteQuests', JSON.stringify(this.whiteQuests));
		localStorage.setItem('blueQuests', JSON.stringify(this.blueQuests));
		localStorage.setItem('blackQuests', JSON.stringify(this.blackQuests));
		localStorage.setItem('redQuests', JSON.stringify(this.redQuests));
		localStorage.setItem('greenQuests', JSON.stringify(this.greenQuests));

	}

	public getFormControl(controlName: string): FormControl {
		return this.inputHandler.get(controlName) as FormControl;
	}

	public gerarBing(): void {
		this.bingQuests = [];
		const randomAmtW = this.random(2, 3);
		const randomAmtU = this.random(2, 3);
		const randomAmtB = this.random(2, 3);
		const randomAmtR = this.random(2, 3);
		const randomAmtG = this.random(2, 3);
		const amtNeutral = 25 - randomAmtW - randomAmtU - randomAmtB - randomAmtR - randomAmtG;
		this.findQuest(this.neutralQuests, amtNeutral);
		this.findQuest(this.whiteQuests, randomAmtW);
		this.findQuest(this.blueQuests, randomAmtU);
		this.findQuest(this.blackQuests, randomAmtB);
		this.findQuest(this.redQuests, randomAmtR);
		this.findQuest(this.greenQuests, randomAmtG);
		const auxBingQuests = this.sortTheBing();
		const duplicates = this.pastBingQuests.filter(quest => {
			let match = 0;
			for (let i = 0; i < quest.length; i +=1 ) {
				if (quest[i].category === auxBingQuests[i].category && quest[i].number === auxBingQuests[i].number) {
					match +=1;
				}
			}
			return match === 25;
		})
		if (duplicates.length > 0) {
			this.gerarBing();
		} else {
			this.bingQuests = auxBingQuests;
		}
	}

	public random(floor: number, max: number): number {
		return Math.floor((Math.random() * (max - floor + 1)) + floor)
	}

	public addBingToHistory(): void {
		this.pastBingQuests.push(this.bingQuests);
		this.gerarBing();
	}

	private findQuest(questList: QuestCount[], targetAmmount: number): void {
		let minQuestAmt = 0;
		const auxArr = [];
		while (auxArr.length < targetAmmount) {
			const minQuests = questList.filter(quest => quest.timesUsed === minQuestAmt);
			if (minQuests.length >= targetAmmount) {
				for (let i = 0; i < targetAmmount; i+=1) {
					const randomQuest = this.random(0, questList.length - 1);
					auxArr.push(minQuests[randomQuest]);
				}
			} else {
				for (let i = 0; i < minQuests.length; i += 1) {
					const randomQuest = this.random(0, questList.length - 1);
					auxArr.push(minQuests[randomQuest]);
				}
				minQuestAmt += 1;
				const minQuests2 = questList.filter(quest => quest.timesUsed === minQuestAmt);

			}
		}
		this.bingQuests = this.bingQuests.concat(auxArr);
	}

	private sortTheBing(): QuestCount[] {
		return this.bingQuests.sort((a: QuestCount, b: QuestCount) => {
			if (a.category === b.category) {
				if (+a.number > +b.number) {
					return 1;
				} else {
					return -1;
				}
			} else {
				if (a.category === 'N') {
					return 1;
				} else if (a.category === 'W') {
					return 1;
				} else if (a.category === 'U') {
					return 1;
				} else if (a.category === 'B') {
					return 1;
				} else if (a.category === 'R') {
					return 1;
				} else if (a.category === 'G') {
					return 1;
				} else {
					return -1
				}
			}
		});
	}


}

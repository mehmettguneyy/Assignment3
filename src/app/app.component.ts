import { Component } from '@angular/core';
import {Dice} from "./dice";
import {DiceFactory} from "./dice-factory";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment 3';

  dice: Dice;
  imageSrc: string;
  private diceFactory = new DiceFactory();
  private nextDice: Dice;
  private nextImage: HTMLImageElement;
  constructor() {
    this.dice = this.diceFactory.randomDice;
    this.imageSrc = AppComponent.diceImageSrc(this.dice.number);
    this.nextDice = this.diceFactory.randomDice;
    this.nextImage = new Image();
    this.preload();
  }
  private static diceImageSrc(num: number) : string {
    return `assets/images/dice/${num}.png`;
  }
  private preload(): void {
    this.nextImage.src = AppComponent.diceImageSrc(this.nextDice.number);
  }
  next() : void {
    this.dice.copy(this.nextDice);
    this.imageSrc = AppComponent.diceImageSrc(this.dice.number);
    this.nextDice = this.diceFactory.randomDice;
    this.preload();
  }
}

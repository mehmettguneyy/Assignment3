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
  imageSrc2: string;
  imageSrc3: string;
  private diceFactory = new DiceFactory();
  private nextDice: Dice;
  private nextDice2: Dice;
  private nextDice3: Dice;
  private nextImage: HTMLImageElement;
  constructor() {
    this.dice = this.diceFactory.randomDice;
    this.imageSrc = AppComponent.diceImageSrc(this.dice.number);
    this.imageSrc2 = AppComponent.diceImageSrc2(this.dice.number);
    this.imageSrc3 = AppComponent.diceImageSrc3(this.dice.number);
    this.nextDice = this.diceFactory.randomDice;
    this.nextDice2 = this.diceFactory.randomDice;
    this.nextDice3 = this.diceFactory.randomDice;
    this.nextImage = new Image();
    this.preload();

  }


  private static diceImageSrc(num1: number) : string {
    return `assets/images/dice/${num1}.png`;
  }
  private preload(): void {
    this.nextImage.src = AppComponent.diceImageSrc(this.nextDice.number);
  }

  private static diceImageSrc2(num2: number) : string {
    return `assets/images/dice/${num2}.png`;
  }
  private preload2(): void {
    this.nextImage.src = AppComponent.diceImageSrc2(this.nextDice2.number);
  }
  private static diceImageSrc3(num3: number) : string {
    return `assets/images/dice/${num3}.png`;
  }
  private preload3(): void {
    this.nextImage.src = AppComponent.diceImageSrc3(this.nextDice3.number);
  }


  next() : void {
    this.dice.copy(this.nextDice);
    this.imageSrc = AppComponent.diceImageSrc(this.dice.number);
    this.nextDice = this.diceFactory.randomDice;
    this.preload();


    this.dice.copy(this.nextDice2);
    this.imageSrc2 = AppComponent.diceImageSrc2(this.dice.number);
    this.nextDice2 = this.diceFactory.randomDice;
    this.preload2();

    this.dice.copy(this.nextDice3);
    this.imageSrc3 = AppComponent.diceImageSrc3(this.dice.number);
    this.nextDice3 = this.diceFactory.randomDice;
    this.preload3();

  }
}

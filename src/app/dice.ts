export class Dice {

  number: number = 1;


  // generate a random card info
  constructor() {
  }

  copy(dice: Dice): void {
    this.number = dice.number;

  }
}

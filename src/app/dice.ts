export class Dice {

 number: number = 1;

  constructor() {
  }

  copy(dice: Dice): void {
    this.number = dice.number;


  }
}

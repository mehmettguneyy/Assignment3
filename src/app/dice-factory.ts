import {Dice} from "./dice";


export class DiceFactory{

  get randomDice(): Dice {
    const rand = Math.floor(1 + 6 * Math.random());

    return DiceFactory.makeDice(rand);
  }

  private static makeDice(index: number): Dice {
    const dice = new Dice();

    dice.number = index;

        return dice;

  }
}

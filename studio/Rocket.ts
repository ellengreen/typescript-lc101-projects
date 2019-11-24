import { Astronaut } from './astronaut';
import { Cargo } from './cargo';
import { Payload } from "./Payload";

export class Rocket {
  name: string;
  totalCapacityKg: number;
  cargoItems: Cargo[] = [];
  astronauts: Astronaut[] = [];

  constructor(name: string, totalCapacityKg: number){
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }

  sumMass( items: Payload[] ): number {
    let sumOfItems = 0;
    for (let i=0; i < items.length; i++){
      sumOfItems += items[i].massKg
    };
    return sumOfItems
  }

  currentMassKg(): number {
    return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
  }

  canAdd(item: Paylod): boolean {
    if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
      return true
    }
  }

  addCargo(cargo: Cargo) {
    if (this.canAdd(cargo)){
      this.cargoItems.push(cargo);
      return true
    } else {
      return false
    }
  }

  addAstronaut(astronaut: Astronaut) {
    if (this.canAdd(astronaut)) {
      this.astronauts.push(astronaut);
      return true;
    } else {
      return false;
    }
  }
}

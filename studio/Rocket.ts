import { Payload } from "./Payload";
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";

export class Rocket implements Payload{
    
    name: string;
    massKg: number;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    atronauts: Astronaut[] = [];
    
    
    constructor(name: string, totalCapacityKg:number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    
    sumMass( items: Payload[] ): number {
        //sumMass( items: Payload[] ): number
        //Returns the sum of all items using each item's massKg property
        var sum_of_items=0;
        for (let index = 0; index < items.length; index++) {
            var item = items[index];
            sum_of_items+=item.massKg;
            // sum_of_items+=items[index].massKg
        }
        return sum_of_items;
     }

     currentMassKg(): number {
         //currentMassKg(): number
         //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        let cargoMassTotal = this.sumMass(this.cargoItems);
        let astronautMassTotal = this.sumMass(this.atronauts);
        let massTotal = cargoMassTotal + astronautMassTotal;
        return massTotal;
     }

     canAdd(item: Payload): boolean {
         //canAdd(item: Payload): boolean
         //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        let totalMass = this.currentMassKg() + item.massKg;
        return totalMass <= this.totalCapacityKg;
     }

     addCargo(cargo: Cargo){
        //addCargo(cargo: Cargo)
        //Uses this.canAdd() to see if another item can be added.
        //If true, adds cargo to this.cargoItems and returns true.
        //If false, returns false.
        let itCanAddIt = this.canAdd(cargo);
        if(itCanAddIt) {
            this.cargoItems.push(cargo);
            return true;
        }else{
            return false;
        }
     }

     addAstronaut(astronaut: Astronaut){
        //Uses this.canAdd() to see if another astronaut can be added.
        //If true, adds astronaut to this.astronauts and returns true.
        //If false, returns false
        let itCanAddIt = this.canAdd(astronaut);
        if(itCanAddIt) {
            this.addAstronaut.push (astronaut);
            return true;
        }else{
            return false;
        }
     }
 }
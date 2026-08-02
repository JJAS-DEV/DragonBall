import { originPlanet } from "./originPlanet";
import { transformations } from "./transformations";

export class Personaje {
    id!:number;
    name!: string;
    race!: string;
    gender!: string;
    ki!: string;
    maxKi!: string;
    description!: string;
    affiliation!: string;
    image!:string;
    originPlanet: originPlanet= new originPlanet();
    transformations: transformations[]= [];
    
   
}







// name*	string
// race*	string
// Enum:
// Array [ 13 ]
// gender*	string
// Enum:
// Array [ 4 ]
// ki*	string
// maxKi*	string
// description*	string
// affiliation*	string
// Enum:
// Array [ 10 ]
// originPlanet*	string
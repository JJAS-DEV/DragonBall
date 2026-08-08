import { Component, OnInit } from '@angular/core';
import { transformations } from '../../../models/transformations';
import { ActivatedRoute } from '@angular/router';
import { ServiceDataService } from '../../../services/service-data.service';
import { Personaje_seleccionado } from '../../../models/Personaje_seleccionado';
import { DrangonballZComponent } from '../drangonball-z.component';
import { CommonModule } from '@angular/common';
import { Personaje } from '../../../models/Personaje';
import { CarrucelImagenesComponent } from "../../carrucel-imagenes/carrucel-imagenes.component";
import { SharingDataService } from '../../../services/sharing-data/sharing-data.service';

@Component({
  selector: 'app-personaje',
  imports: [CommonModule, CarrucelImagenesComponent],
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css', "../drangonball-z.component.css"]
 
}) 
export class PersonajeComponent implements OnInit {
    open!:Personaje;
  personaje_seleccionado:Personaje_seleccionado=new Personaje_seleccionado();

    constructor( private route: ActivatedRoute, private service:ServiceDataService,private sharingDataService:SharingDataService){

    }
    mapaClases: any = {
  'Z Fighter': 'Z-Fighter',
  'Freelancer': 'Freelancer',
  'Army of Frieza': 'Army-of-Frieza',
  'Pride Troopers': 'Pride-Troopers',
  'Assistant of Vermoud': 'Assistant-of-Vermoud',
  'Villain': 'Villain',
  'Other': 'Other',
};



  ngOnInit(): void {
        this.route.paramMap.subscribe(params=>{
      const id:number=+(params.get('id')||'0');

      if(id>0){
        // this.SharingData.findUserByIdEventEmitter.emit(id);
        this.service.findById(id).subscribe(user => {

          this.open = user;
                this.sharingDataService.personaje.emit(user);


        });

      }

    }
    )
 this.sharingDataService.personajeSeleccionado.subscribe(ps => {
      this.personaje_seleccionado = ps;
    });
  }
    





}

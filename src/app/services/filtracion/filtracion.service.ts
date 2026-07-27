import { Injectable } from '@angular/core';
import { SharingDataService } from '../sharing-data/sharing-data.service';
import { ServiceDataService } from '../service-data.service';
import { Personaje } from '../../models/Personaje';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FiltracionService {

  buscador!: string;
  lista: Personaje[];
  datos:any;
  constructor(private sharingDataService: SharingDataService,
    private serviceDataService: ServiceDataService, private route: ActivatedRoute) {
    this.lista = []
  }


  buscadorPornombre() {
    this.sharingDataService.typeBuscador.subscribe(personaje => {
      this.serviceDataService.findAllpageAndName(personaje).subscribe(personajes => {
        this.lista = personajes;

        console.log("busquedaPorNombre: {" + this.lista.map(p => p.name).join(", ") + "}");


      })
    })



  }

  findAll(page:number) {

      console.log('consulta findAll en filters');

      // this.service.findAll().subscribe(u => this.users = u);

      this.route.paramMap.subscribe(params => {

        this.serviceDataService.findAllpage(page).subscribe(pageable => {
        this.datos = pageable;

          this.sharingDataService.datos.emit(this.datos);
          
          
        });

      })
    }









  


}
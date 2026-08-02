import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../../services/service-data.service';
import { PaginadorComponent } from "../paginador/paginador.component";
import { Personaje } from '../../models/Personaje';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BuscadorComponent } from "../buscador/buscador.component";
import { SharingDataService } from '../../services/sharing-data/sharing-data.service';
import { FiltracionService } from '../../services/filtracion/filtracion.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-drangonball-z',
  imports: [PaginadorComponent, RouterModule, BuscadorComponent, BuscadorComponent,CommonModule],
  templateUrl: './drangonball-z.component.html',
  styleUrl: './drangonball-z.component.css'
})
export class DrangonballZComponent implements OnInit {

  personajes: Personaje[] = [];
  datos: any = {};
  url: string = "/personajes/page/"
  open:Personaje=new Personaje();



  buscador: string = "";


    openModal(p: Personaje) {
    this.open = p;
    console.log("modal abierto")
  }


  constructor(private service: ServiceDataService, private route: ActivatedRoute, private sharingDataService: SharingDataService, private filtracionService: FiltracionService) {
  }

  ngOnInit(): void {

    this.buscadorsinfiltro();








    // // this.service.findAll().subscribe(u => this.users = u);

    // this.route.paramMap.subscribe(params => {
    //   const page = +(params.get('page') || '0');

    //   this.service.findAllpage(page).subscribe(pageable => {
    //     this.personajes = pageable.items;
    //     this.datos = pageable;
    //   });


    // })








  }
  lista: Personaje[] = [];


  buscadorsinfiltro() {



    this.route.paramMap.subscribe(params => {
      const page = +(params.get('page') || '0');

      this.filtracionService.findAll(page);

    })

    this.sharingDataService.datos.subscribe(d => {
      console.log("el tipo de dato es" + typeof d);
      if (d.items) {
        // Caso: la API devolvió objeto con items
        this.datos = d;
        this.personajes = d.items;
        console.log("entra objeto con items");
      } else {
        // Caso: la API devolvió directamente un objeto (o varios personajes)
        // Normalizamos: si es un solo objeto, lo metemos en array
        this.personajes = Array.isArray(d) ? d : [d];
        console.log("entra objeto directo");
      }





    })








  }






// Mapa que traduce nombres con espacios a clases CSS válidas
mapaClases: any = {
  'Z Fighter': 'Z-Fighter',
  'Freelancer': 'Freelancer',
  'Army of Frieza': 'Army-of-Frieza',
  'Pride Troopers': 'Pride-Troopers',
  'Assistant of Vermoud': 'Assistant-of-Vermoud',
  'Villain': 'Villain',
  'Other': 'Other',
};



}
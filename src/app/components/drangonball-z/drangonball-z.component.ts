import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../../services/service-data.service';
import { PaginadorComponent } from "../paginador/paginador.component";
import { Personaje } from '../../models/Personaje';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BuscadorComponent } from "../buscador/buscador.component";
import { SharingDataService } from '../../services/sharing-data/sharing-data.service';
import { FiltracionService } from '../../services/filtracion/filtracion.service';


@Component({
  selector: 'app-drangonball-z',
  imports: [PaginadorComponent, RouterModule, BuscadorComponent, BuscadorComponent],
  templateUrl: './drangonball-z.component.html',
  styleUrl: './drangonball-z.component.css'
})
export class DrangonballZComponent implements OnInit {

  personajes: Personaje[] = [];
  datos: any = {};
  url: string = "/personajes/page/"


  constructor(private service: ServiceDataService, private route: ActivatedRoute, private sharingDataService: SharingDataService, private filtracionService: FiltracionService) {
  }

  ngOnInit(): void {

    if (this.personajes == undefined || this.personajes.length == 0) {
      console.log('consulta findAll');

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
    this.typeNombre();
    this.buscadorsinfiltro()



  }
  typeNombre() {

    this.filtracionService.buscadorPornombre();


  }
  buscadorsinfiltro() {

    

     this.route.paramMap.subscribe(params => {
        const page = +(params.get('page') || '0');

          this.filtracionService.findAll(page);

  })
    
      this.sharingDataService.datos.subscribe(d => {
        
        console.log("entra")
                this.personajes=d.items;

        this.datos = d;

      })



  }






}
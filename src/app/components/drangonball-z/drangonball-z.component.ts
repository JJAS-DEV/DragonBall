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

  buscador: string = "";


  constructor(private service: ServiceDataService, private route: ActivatedRoute, private sharingDataService: SharingDataService, private filtracionService: FiltracionService) {
  }

  ngOnInit(): void {

    if (this.personajes == undefined || this.personajes.length == 0) {
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
    this.sharingDataService.typeBuscador.subscribe(b => {
      console.log("------------------> entro aqui ----------> " + b)
      this.buscador = b;
      if (this.buscador === "") {
        console.log("entro aqui" + this.buscador)

        this.buscadorsinfiltro();





      } else {
        this.typeNombre();




      }

    })


  }
  lista: Personaje[] = [];

  typeNombre() {


    this.filtracionService.buscadorPornombre();
    this.sharingDataService.datos.subscribe(d => {

      this.personajes = d
      this.lista=[]

      const limite = Math.min(this.personajes.length, 10);

      for (let i = 0; i < limite; i++) {
        this.lista.push(this.personajes[i]);
      }
      this.personajes = this.lista;


    })




  }
  buscadorsinfiltro() {



    this.route.paramMap.subscribe(params => {
      const page = +(params.get('page') || '0');

      this.filtracionService.findAll(page);

    })

    this.sharingDataService.datos.subscribe(d => {

      console.log("entra")
      this.personajes = d.items;

      this.datos = d;

    })








  }






}
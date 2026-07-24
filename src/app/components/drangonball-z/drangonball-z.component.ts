import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../../services/service-data.service';
import { PaginadorComponent } from "../paginador/paginador.component";
import { Personaje } from '../../models/Personaje';
import { ActivatedRoute, RouterModule } from '@angular/router';


@Component({
  selector: 'app-drangonball-z',
  imports: [PaginadorComponent, RouterModule],
  templateUrl: './drangonball-z.component.html',
  styleUrl: './drangonball-z.component.css'
})
export class DrangonballZComponent implements OnInit {

  personajes: Personaje[] = [];
  datos: any = {};
  url: string = "/personajes/page/"


  constructor(private service: ServiceDataService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {

    if (this.personajes == undefined || this.personajes.length == 0) {
      console.log('consulta findAll');

      // this.service.findAll().subscribe(u => this.users = u);

      this.route.paramMap.subscribe(params => {
        const page = +(params.get('page') || '0');
        this.service.findAllpage(page).subscribe(pageable => {
          this.personajes = pageable.items;
          this.datos = pageable;
        });
      })




    }


  


  }






}
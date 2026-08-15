import { Component, OnInit } from '@angular/core';
import { originPlanet } from '../../models/originPlanet';
import { ServiceDataService } from '../../services/service-data.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PaginadorComponent } from "../paginador/paginador.component";

@Component({
  selector: 'app-planetas',
  imports: [PaginadorComponent,RouterModule],
  templateUrl: './planetas.component.html',
  styleUrl: './planetas.component.css'
})
export class PlanetasComponent implements OnInit  {

  planetas:originPlanet[]=[];
  datos:any;
  url:string="/planetas/page/"

  constructor(private service: ServiceDataService, private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.findPlanetas();
  }

  findPlanetas():void{
     this.route.paramMap.subscribe(params => {
      const page = +(params.get('page') || '1');

      this.service.findAllpageplanaet(page).subscribe(pageable => {
        this.datos=pageable;
        this.planetas = pageable.items;
      });


    })

    
  }




}

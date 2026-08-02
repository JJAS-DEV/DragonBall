import { Injectable } from '@angular/core';
import { SharingDataService } from '../sharing-data/sharing-data.service';
import { ServiceDataService } from '../service-data.service';
import { Personaje } from '../../models/Personaje';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FiltracionService {

  lista: Personaje[];
  datos: any;
  constructor(private sharingDataService: SharingDataService,
    private serviceDataService: ServiceDataService, private route: ActivatedRoute) {
    this.lista = []
  }



  findAll(page: number) {

    this.route.paramMap.subscribe(params => {

      this.serviceDataService.findAllpage(page).subscribe(pageable => {
        this.datos = pageable;

        this.sharingDataService.datos.emit(this.datos);


      });

    })

  }

  

  

  // this.service.findAll().subscribe(u => this.users = u);















}
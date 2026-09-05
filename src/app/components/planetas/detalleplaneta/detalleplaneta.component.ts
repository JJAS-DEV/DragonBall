import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../../../services/service-data.service';
import { SharingDataService } from '../../../services/sharing-data/sharing-data.service';
import { ActivatedRoute } from '@angular/router';
import { originPlanet } from '../../../models/originPlanet';

@Component({
  selector: 'app-detalleplaneta',
  imports: [],
  templateUrl: './detalleplaneta.component.html',
  styleUrl: './detalleplaneta.component.css'
})
export class DetalleplanetaComponent implements OnInit {
  constructor(private service:ServiceDataService ,private route: ActivatedRoute){
    
  }
    planeta!:originPlanet;
  ngOnInit(): void {
     this.route.paramMap.subscribe(params=>{
      const id:number=+(params.get('id')||'0');

      if(id>0){
        // this.SharingData.findUserByIdEventEmitter.emit(id);
        this.service.findByIdPlanete(id).subscribe(planeta => {

          this.planeta = planeta;


        });

      }

    }
    )
  }


}

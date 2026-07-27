import { Component } from '@angular/core';
import { ServiceDataService } from '../../services/service-data.service';
import { SharingDataService } from '../../services/sharing-data/sharing-data.service';

@Component({
  selector: 'buscador',
  imports: [],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  

  constructor(private service:SharingDataService){

  }


  onSearch(event: Event){

      const value: string = (event.target as HTMLInputElement).value;
    this.service.typeBuscador.emit(value);
      

  }

}

import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../../services/service-data.service';
import { SharingDataService } from '../../services/sharing-data/sharing-data.service';
import { Personaje } from '../../models/Personaje';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'buscador',
  imports: [FormsModule ],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent  implements OnInit  {
  
  resultados:Personaje[]=[];
    termino: string = '';

  constructor(private service:SharingDataService,private  servicehttp:ServiceDataService){
    
     this.resultados=[];



  }
  ngOnInit(): void {

  }

buscar(valor: string) {
  console.log("Buscando:", valor);
  this.servicehttp.findAllpageAndName(this.termino).subscribe(nombre=>{
      this.resultados=nombre

      console.log(nombre)

      console.log(this.resultados)

    }) // Aquí puedes filtrar tu array o llamar a una API

}

  seleccionar(item: any) {
    this.termino = item.name;

  this.service.datos.emit(item)

    this.resultados=[]



  }






}

import { EventEmitter, Injectable } from '@angular/core';
import { Filtracion } from '../../models/Filtracion';
import { Personaje } from '../../models/Personaje';
import { Personaje_seleccionado } from '../../models/Personaje_seleccionado';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private _typeBuscador:EventEmitter<string>=new EventEmitter();
  private _datos:EventEmitter<any>=new EventEmitter();
  private _buscar:EventEmitter<boolean>=new EventEmitter();
  private _filtro:EventEmitter<Filtracion>=new EventEmitter();
  private _personaje:EventEmitter<any>=new EventEmitter();
  private _mostrartransformaciones:EventEmitter<boolean>=new EventEmitter();
  private _personajeSeleccionado:EventEmitter<Personaje_seleccionado>=new EventEmitter();
  private _filtrado:EventEmitter<number>=new EventEmitter();








  constructor() { }

  
  get typeBuscador ():EventEmitter<string> {
    return this._typeBuscador;



  }
  get datos():EventEmitter<any>{
    return this._datos;

  }
   get buscador():EventEmitter<any>{
    return this._buscar;

  }
   get filtro():EventEmitter<any>{
    return this._filtro;

  }

  get personaje():EventEmitter<any>{
    return this._personaje;
  }
  get mostrartransformaciones():EventEmitter<any>{
  return this._mostrartransformaciones;
}
get personajeSeleccionado():EventEmitter<Personaje_seleccionado>{
  return this._personajeSeleccionado;
}
get filtradoporpage():EventEmitter<number>{
  return this._filtrado;

}

}

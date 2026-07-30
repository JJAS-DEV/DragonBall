import { EventEmitter, Injectable } from '@angular/core';
import { Filtracion } from '../../models/Filtracion';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private _typeBuscador:EventEmitter<string>=new EventEmitter();
  private _datos:EventEmitter<any>=new EventEmitter();
  private _buscar:EventEmitter<boolean>=new EventEmitter();

    private _filtro:EventEmitter<Filtracion>=new EventEmitter();







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


}

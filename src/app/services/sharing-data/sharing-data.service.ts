import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private _typeBuscador:EventEmitter<string>=new EventEmitter();
  private _datos:EventEmitter<any>=new EventEmitter();



  constructor() { }

  
  get typeBuscador ():EventEmitter<string> {
    return this._typeBuscador;



  }
  get datos():EventEmitter<any>{
    return this._datos;

  }

}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharingDataService } from './sharing-data/sharing-data.service';
import { Filtracion } from '../models/Filtracion';

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {
  

  url:string="https://dragonball-api.com/api";
  filtrado:Filtracion=new Filtracion();
  constructor(private http:HttpClient,private service:SharingDataService) { 
    service.filtro.subscribe(filtrado=>{
      this.filtrado=filtrado;
    })

   


  }

  
  findAll():Observable<any>{
    return this.http.get<any>(this.url+"/characters");
  }

  
  findAllpage(page:number):Observable<any>{
    return this.http.get<any>(this.url+"/characters?page="+page);
  }

findAllpageAndName(name:String):Observable<any>{
  
    return this.http.get<any>(this.url+"/characters?name="+name);
  }

findAllpageconFiltro():Observable<any>{


   let params = new HttpParams();
    
if (this.filtrado.name && this.filtrado.name.trim() !== '') {
  params = params.set('name', this.filtrado.name);
}

if (this.filtrado.affiliation && this.filtrado.affiliation.trim() !== '') {
  params = params.set('affiliation', this.filtrado.affiliation);
}
  
    return this.http.get<any>(this.url+"/characters?",{params});
  

    }



}

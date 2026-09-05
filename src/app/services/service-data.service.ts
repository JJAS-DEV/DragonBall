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
    this.service.filtradoporpage.subscribe(limite=>{
        this.filtrado.limit=limite;

    })
              return this.http.get<any>(this.url+"/characters?page="+page+"&limit="+this.filtrado.limit);

  }
findAllpageAndName(name:String):Observable<any>{
  
    return this.http.get<any>(this.url+"/characters?name="+name);
  }


  findAllpageplanaet(page:number):Observable<any>{

        return this.http.get<any>(this.url+"/planets?page="+page+"&limit="+this.filtrado.limit);


  }



findAllpageconFiltro():Observable<any>{


   let params = new HttpParams();
    
if (this.filtrado.name && this.filtrado.name.trim() !== '') {
  params = params.set('name', this.filtrado.name);
}

if (this.filtrado.affiliation && this.filtrado.affiliation.trim() !== '') {
  params = params.set('affiliation', this.filtrado.affiliation);
}
if (this.filtrado.gender && this.filtrado.gender.trim() !== '') {
  params = params.set('gender', this.filtrado.gender);
}
if (this.filtrado.race && this.filtrado.race.trim() !== '') {
  params = params.set('race', this.filtrado.race);
}

  
    return this.http.get<any>(this.url+"/characters?",{params});
  }

  findById(id:number):Observable<any>{
    
    return this.http.get<any>(this.url+"/characters/"+id);
  }

  findByIdPlanete(id:number):Observable<any>{
    
    return this.http.get<any>(this.url+"/planets/"+id);
  }

  
}

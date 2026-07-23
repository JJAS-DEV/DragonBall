import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../../services/service-data.service';
import { Personaje } from '../../models/personaje';

@Component({
  selector: 'app-drangonball-z',
  imports: [],
  templateUrl: './drangonball-z.component.html',
  styleUrl: './drangonball-z.component.css'
})
export class DrangonballZComponent implements OnInit {

  personajes:Personaje[]=[];


constructor(private service: ServiceDataService) {
    }
  ngOnInit(): void {
    this.service.findAll().subscribe(data=>{
      this.personajes=data.items;
    })

    
  }

   
data():void{

  console.log(this.personajes)

}

    
  }






  
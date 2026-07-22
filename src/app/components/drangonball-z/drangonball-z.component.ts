import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../../services/service-data.service';

@Component({
  selector: 'app-drangonball-z',
  imports: [],
  templateUrl: './drangonball-z.component.html',
  styleUrl: './drangonball-z.component.css'
})
export class DrangonballZComponent implements OnInit {

  personaje:any={}


constructor(private service: ServiceDataService) {
    }
  ngOnInit(): void {
    this.service.findAll().subscribe(data=>{
      this.personaje=data
    })

    
  }

   
data():void{

  console.log(this.personaje.items)

}

    
  }






  
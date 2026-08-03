import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../../services/service-data.service';
import { SharingDataService } from '../../services/sharing-data/sharing-data.service';
import { Personaje } from '../../models/Personaje';
import { FormsModule } from '@angular/forms';
import { Filtracion } from '../../models/Filtracion';

@Component({
  selector: 'buscador',
  imports: [FormsModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent implements OnInit {

  resultados: Personaje[] = [];
  termino: string = '';

  filtrado: Filtracion = new Filtracion();

  constructor(private service: SharingDataService, private servicehttp: ServiceDataService) {

    this.resultados = [];



  }
  ngOnInit(): void {

  }

  buscar(valor: string) {
    console.log("Buscando:", valor);
    this.servicehttp.findAllpageAndName(this.termino).subscribe(nombre => {
      if (this.termino != "") {
        this.resultados = nombre

        console.log(nombre)

        console.log(this.resultados)

      } else {
        this.resultados = []
      }




    }) // Aquí puedes filtrar tu array o llamar a una API

  }
  filtros: boolean = false;

  seleccionar(item: any) {
    this.termino = item.name;

    this.filtrado.affiliation = item.affiliation;
    this.filtrado.gender = item.gender;


    this.service.datos.emit(item)

   
    this.resultados = []




  }





  toggleFiltros() {
    this.filtros = !this.filtros;

  }
  personajes!: any;
  Buscador() {

    this.filtrado.name = this.termino;
    
    this.service.filtro.emit(this.filtrado);
 this.servicehttp.findAllpageconFiltro().subscribe(datos=>{
      this.service.datos.emit(datos);
    })

    this.resultados = [];



  }

  affiliation(affiliation: string) {

    if (affiliation === "sin_filtro") {
      this.filtrado.affiliation = "";


    } else {

      this.filtrado.affiliation = affiliation;
    }



  }

  seleccion_genero(gender: string): void {
  if (gender === "sin_filtro") {
    this.filtrado.gender = "";
  } else {
    this.filtrado.gender = gender;
  }
}
  seleccion_race(race: string): void {
  if (race === "sin_filtro") {
    this.filtrado.race = "";
  } else {
    this.filtrado.race = race;
  }
}



  opcionesRaza: string[] = ['Z Fighter',
    
    'Freelancer',
    'Army of Frieza',
    'Pride Troopers',
    'Assistant of Vermoud',
    'Villain',
    'Other',
    'sin_filtro'];


  opcionesGenero: string[] = ['Male', 'Female', 'Unknown', 'sin_filtro'];

  opcionesRace: string[] = ['Human', 'Saiyan', 'Namekian', 'Majin', 'Frieza Race', 'Android', 'Jiren Race', 'God', 'Angel', 'Evil', 'Nucleico', 'Nucleico benigno', 'Unknown', 'sin_filtro'];




}

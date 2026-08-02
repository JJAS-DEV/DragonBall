import { Component, Input, OnInit } from '@angular/core';
import { transformations } from '../../models/transformations';
import { ServiceDataService } from '../../services/service-data.service';
import { SharingDataService } from '../../services/sharing-data/sharing-data.service';
import { Personaje } from '../../models/Personaje';
import { Personaje_seleccionado } from '../../models/Personaje_seleccionado';

@Component({
  selector: 'carrucel-imagenes',
  imports: [],
  templateUrl: './carrucel-imagenes.component.html',
  styleUrl: './carrucel-imagenes.component.css'
})
export class CarrucelImagenesComponent implements OnInit {

  @Input() personaje !: Personaje; // ejemplo con 7
  paginaActual = 0;

  lista: transformations[] = [];
  itemsPorPagina = 3;
  primera: transformations = {
    id: 0,
    name: "Primera Transformación",
    image: "url_de_imagen",
    ki: "Base",
  };
  personaje_seleccionado: Personaje_seleccionado = new Personaje_seleccionado();

  constructor(private service: SharingDataService) {
    this.primeraTransformacion();




  }
  ngOnInit(): void {


  }
  primeraTransformacion(): void {
    this.primera.id = 0;
    this.service.personaje.subscribe(personaje => {
      this.primera.name = personaje.name+" Base"
      this.primera.image = personaje.image
      this.primera.ki = personaje.maxKi
      this.paginaActual = 0;
      this.lista = [this.primera, ...(personaje.transformations)];

      this.service.mostrartransformaciones.emit(false);
      console.log("Emitiendo false para indicar que no se están mostrando transformaciones");

    });






  }


  get elementosVisibles() {
    const inicio = this.paginaActual * this.itemsPorPagina;
    return this.lista.slice(inicio, inicio + this.itemsPorPagina);
  }

  siguiente() {
    if ((this.paginaActual + 1) * this.itemsPorPagina < this.lista.length) {
      this.paginaActual++;
    }
  }

  anterior() {
    if (this.paginaActual > 0) {
      this.paginaActual--;
    }
  }



  personajeSeleccionado(transformacion: transformations) {
    this.service.personajeSeleccionado.emit({
      seleccionado: true,
      transformaciones: transformacion

    });

    console.log("Emitiendo personaje seleccionado:", {
      seleccionado: true,
      transformaciones: transformacion
    });

  }
}
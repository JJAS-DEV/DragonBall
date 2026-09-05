import { Component } from '@angular/core';
import { Personaje } from '../../models/Personaje';
import { CarrucelImagenesComponent } from '../carrucel-imagenes/carrucel-imagenes.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FavoritosService } from '../../services/favoritos.service';

@Component({
  selector: 'app-personajes-favoritos',
  imports: [CommonModule, CarrucelImagenesComponent,RouterModule  ],
  templateUrl: './personajes-favoritos.component.html',
    styleUrls: ["./personajes-favoritos.component.css", "../drangonball-z/drangonball-z.component.css"]

})
export class PersonajesFavoritosComponent {


   favoritos: Personaje[] = JSON.parse(localStorage.getItem('favoritos') || '[]');
   
mapaClases: any = {
  'Z Fighter': 'Z-Fighter',
  'Freelancer': 'Freelancer',
  'Army of Frieza': 'Army-of-Frieza',
  'Pride Troopers': 'Pride-Troopers',
  'Assistant of Vermoud': 'Assistant-of-Vermoud',
  'Villain': 'Villain',
  'Other': 'Other',
};
constructor(private service: FavoritosService) {

}
eliminarFavorito(id : number) {
  console.log("eliminarFavorito lo quita de favorito:", id);
  this.service.eliminarFavorito(id);

  
}
}



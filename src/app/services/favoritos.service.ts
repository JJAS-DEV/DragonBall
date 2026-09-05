import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

   favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
  constructor(private router: Router) { }


  toggleFavorite(personaje: any) {
  // Leer favoritos actuales, si no existe se crea un array vacío

  // Verificar si ya está en favoritos
  const existe = this.favoritos.find((p: any) => p.id === personaje.id);

  if (existe) {
    // Quitar de favoritos
  Swal.fire({
      title: '⚠️ Ya estaba en favoritos',
      text: `El personaje ${personaje.name} ya estaba en tus favoritos.`,
      icon: 'warning',
      confirmButtonText: 'Entendido'
    });
  } else {
   this.favoritos.push(personaje);
    personaje.favorite = true;

    // SweetAlert mensaje para agregado
    Swal.fire({
      title: '✅ Agregado a favoritos',
      text: `${personaje.name} ahora está en tu lista.`,
      icon: 'success',
      confirmButtonText: 'Genial'
    });
  }

  // Guardar en LocalStorage (crea o actualiza)
  localStorage.setItem('favoritos', JSON.stringify(this.favoritos));

}
 eliminarFavorito(id: number) {
  this.favoritos = this.favoritos.filter((p: any) => p.id !== id);

  // Guardar lista actualizada
  localStorage.setItem('favoritos', JSON.stringify(this.favoritos));

  // Actualizar la propiedad en el componente
  this.favoritos = this.favoritos;

  // Opcional: alerta con SweetAlert2
  Swal.fire({
    title: '❌ Eliminado',
    text: 'El personaje fue quitado de favoritos.',
    icon: 'error',
    confirmButtonText: 'Ok'
  });
this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  this.router.navigate(['/personajesFavoritos']);
});
 }

}

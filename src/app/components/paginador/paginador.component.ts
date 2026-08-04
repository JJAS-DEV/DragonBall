import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data/sharing-data.service';

@Component({
  selector: 'paginador',
  imports: [RouterModule],
  templateUrl: './paginador.component.html',
  styleUrl: './paginador.component.css'
})
export class PaginadorComponent {
  @Input() paginador:any={};
  @Input()url!:string;




  blockSize = 4; 
  opcionesGenero: number[] = [5, 10, 15, 20, 25, 30];
  
   numberitems:number;
  constructor(private service: SharingDataService,private router: Router) {
     const valorGuardado = localStorage.getItem('numero');
    if (valorGuardado) {
      this.numberitems = Number(valorGuardado);

        this.service.filtradoporpage.emit(this.numberitems);

    } else {
      // Si no hay nada guardado, asignamos un número por defecto
      this.numberitems = 5; // 👈 aquí colocas el número que quieras
    }

   }

  // Opciones de items por página
seleccion_numberitems(event: number) {

  this.service.filtradoporpage.emit(event);
    // 👇 primero navega a otra página (ejemplo: la última)

    localStorage.setItem('numero', event.toString());
        if(this.verificarTexto("planetas")){

             this.router.navigate(["/personajes/page/1"]).then(() => {
    // 👇 luego regresa a la primera página
    if(this.verificarTexto("planetas")){

      this.router.navigate([this.url+1]);
    }else{
            this.router.navigate([this.url+0]);

    }

  
  });

        }else{
           this.router.navigate(["/planetas/page/1"]).then(() => {
    // 👇 luego regresa a la primera página
    if(this.verificarTexto("planetas")){

      this.router.navigate([this.url+1]);
    }else{
            this.router.navigate([this.url+0]);

    }
  });
        }
 

}

verificarTexto(palabra: string): boolean {
  return this.url.includes(palabra);
}
get visiblePages(): number[] {
    const half = Math.floor(this.blockSize / 2);

  let start = this.paginador.currentPage - half;
  let end = this.paginador.currentPage + half - 1; // 👈 ajuste

  if (start < 1) {
    start = 1;
    end = this.blockSize;
  }
  if (end > this.paginador.totalPages) {
    end = this.paginador.totalPages;
    start = Math.max(1, end - this.blockSize + 1);
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}








  


  



}

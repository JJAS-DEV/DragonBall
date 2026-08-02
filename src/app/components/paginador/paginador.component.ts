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
  
  numberitems:number=5;
  constructor(private service: SharingDataService,private router: Router) { }

  // Opciones de items por página
seleccion_numberitems(event: number) {
  this.numberitems = event;
  this.service.filtradoporpage.emit(this.numberitems);
    // 👇 primero navega a otra página (ejemplo: la última)
  this.router.navigate([this.url + this.paginador.totalPages]).then(() => {
    // 👇 luego regresa a la primera página
    this.router.navigate([this.url + 1]);
  });

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

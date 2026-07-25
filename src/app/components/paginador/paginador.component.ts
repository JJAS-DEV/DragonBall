import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

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


get visiblePages(): number[] {
  // 1. Calcular en qué bloque estoy
  const blockIndex = Math.floor(this.paginador.currentPage / 4);

  // 2. Calcular inicio y fin del bloque
  const start = blockIndex * this.blockSize;
  const end = Math.min(start + this.blockSize, this.paginador.totalPages);

  // 3. Generar el arreglo de páginas visibles
  return Array.from({ length: end - start }, (_, i) => start + i + 1);
}








  


  



}

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

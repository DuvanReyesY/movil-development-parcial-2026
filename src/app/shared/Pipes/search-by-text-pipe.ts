import { Pipe, PipeTransform } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';

@Pipe({ name: 'searchByText', standalone: false })
export class SearchByTextPipe implements PipeTransform {
  transform(items: Transaccion[], texto: string): Transaccion[] {
    if (!items || !texto) return items;
    const lowerText = texto.toLowerCase();
    return items.filter(item => 
      item.titulo.toLowerCase().includes(lowerText) || 
      item.descripcion?.toLowerCase().includes(lowerText)
    );
  }
}
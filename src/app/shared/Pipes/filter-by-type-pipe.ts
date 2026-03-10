import { Pipe, PipeTransform } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';

@Pipe({ name: 'filterByType', standalone: false })
export class FilterByTypePipe implements PipeTransform {
  transform(items: Transaccion[], tipo: string): Transaccion[] {
    if (!items || !tipo || tipo === '') return items;
    return items.filter(item => item.tipo.toLowerCase() === tipo.toLowerCase());
  }
}
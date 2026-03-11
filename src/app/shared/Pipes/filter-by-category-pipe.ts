import { Pipe, PipeTransform } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';

@Pipe({ name: 'filterByCategory', standalone: false })
export class FilterByCategoryPipe implements PipeTransform {
  transform(items: Transaccion[], categoria: string): Transaccion[] {
    if (!items || !categoria || categoria === '') return items;
    return items.filter(item => item.categoria.toLowerCase() === categoria.toLowerCase());
  }
}
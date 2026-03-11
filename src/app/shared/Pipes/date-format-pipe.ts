import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: false
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any): string {
    if (!value) return '';
    
    const date = new Date(value);

    if (isNaN(date.getTime())) return value;

    return date.toLocaleDateString('es-CO', {
      day: '2-digit', month: '2-digit', year: 'numeric'
    });

  }
}

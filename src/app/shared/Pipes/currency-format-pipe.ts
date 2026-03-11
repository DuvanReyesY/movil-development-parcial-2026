import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat',
  standalone: false
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(valor: number, moneda: string = 'COP'): string {
    
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: moneda }).format(valor);
  }

}

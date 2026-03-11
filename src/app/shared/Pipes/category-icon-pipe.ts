import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryIcon',
  standalone: false
})
export class CategoryIconPipe implements PipeTransform {

  transform(categoria: string): string {

    switch (categoria) {
      case 'Alimentacion': return 'restaurant-outline';
      case 'Transporte': return 'car-outline';
      case 'Vivienda': return 'home-outline';
      case 'Salud': return 'medkit-outline';
      case 'Salario': return 'cash-outline';
      case 'Ocio': return 'game-controller-outline';
      default: return 'pricetag-outline';
    }

  }

}
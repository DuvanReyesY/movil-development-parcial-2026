import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryColor',
  standalone: false
})
export class CategoryColorPipe implements PipeTransform {

  transform(categoria: string): string {
    
    switch(categoria){
      case 'Alimentacion': return 'Warning';
      case 'Transporte': return 'primary';
      case 'Vivienda': return 'shade';
      case 'Salud': return 'danger';
      case 'Ocio': return 'tertiary';
      case 'Salario': return 'success';
      default: return 'medium'
    }
    
  }

}

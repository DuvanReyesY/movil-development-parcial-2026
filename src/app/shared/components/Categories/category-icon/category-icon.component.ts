import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-icon',
  templateUrl: './category-icon.component.html',
  standalone: false
})
export class CategoryIconComponent {

  @Input() categoria: string = '';
  @Input() size: 'small' | 'medium' = 'medium';

}

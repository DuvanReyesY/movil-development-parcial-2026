import { Component, Input, OnInit } from '@angular/core';

// category-badge.component.ts
@Component({
  selector: 'app-category-badge', template: `
  <ion-badge [color]="categoria | categoryColor">
    <ion-icon *ngIf="mostrarIcono" [name]="categoria | categoryIcon"></ion-icon>
    {{ categoria }}
  </ion-badge>
`})
export class CategoryBadgeComponent {
  
  @Input() categoria: string = '';
  @Input() mostrarIcono: boolean = true;

}
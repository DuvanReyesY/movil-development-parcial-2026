import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo-preview',
  template: `
    <ion-avatar *ngIf="size === 'small'" (click)="onClick.emit()">
      <ion-img [src]="src"></ion-img>
    </ion-avatar>

    <ion-thumbnail *ngIf="size === 'medium'" (click)="onClick.emit()">
      <ion-img [src]="src"></ion-img>
    </ion-thumbnail>

    <div *ngIf="size === 'large'" class="large-container" (click)="onClick.emit()">
      <ion-img [src]="src"></ion-img>
    </div>
  `,
  styles: [`
    .large-container { width: 100%; height: 250px; overflow: hidden; border-radius: 8px; }
  `],
  standalone: false
})
export class PhotoPreviewComponent {
  @Input() src: string = '';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Output() onClick = new EventEmitter<void>();
}

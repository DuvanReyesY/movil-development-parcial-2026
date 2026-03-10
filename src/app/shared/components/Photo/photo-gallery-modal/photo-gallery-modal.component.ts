import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-photo-gallery-modal',
  standalone: false, // Mantenemos false porque estás usando módulos
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="end">
          <ion-button (click)="close()">Cerrar</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <swiper-container [attr.initial-slide]="fotoInicial" slides-per-view="1">
        <swiper-slide *ngFor="let foto of fotos">
          <div class="slide-container">
            <img [src]="foto" />
          </div>
        </swiper-slide>
      </swiper-container>
    </ion-content>
  `,
  styles: [`
    .slide-container { display: flex; align-items: center; justify-content: center; height: 100%; }
    img { max-width: 100%; max-height: 100%; object-fit: contain; }
  `]
})
export class PhotoGalleryModal {
  @Input() fotos: string[] = [];
  @Input() fotoInicial: number = 0;
  constructor(private modalCtrl: ModalController) {}
  close() { this.modalCtrl.dismiss(); }
}
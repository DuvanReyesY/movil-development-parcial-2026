import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CameraService } from 'src/app/services/camera.service';

@Component({
  selector: 'app-photo-selector',
  templateUrl: './photo-selector.component.html',
  styleUrls: ['./photo-selector.component.scss'],
  standalone: false
})
export class PhotoSelectorComponent {

  @Input() label: string = 'Comprobante';

  @Input() fotoActual: String | null = null;
  @Output() onFotoSeleccionada = new EventEmitter<string>();

  @Output() onFotoEliminada = new EventEmitter<void>();

  constructor(private cameraService: CameraService) {}

  async tomarFoto() {
    const foto = await this.cameraService.tomarFoto();
    if (foto){
      this.fotoActual = foto;
      this.onFotoSeleccionada.emit(foto);
    }

  }

  async seleccionarDeGaleria(){
    const foto = await this.cameraService.seleccionarDeGaleria();
    if(foto) {
      this.fotoActual = foto;
      this.onFotoSeleccionada.emit(foto);
    }
  }

  eliminarFoto(){
    this.fotoActual = null;
    this.onFotoEliminada.emit();
  }
  

}

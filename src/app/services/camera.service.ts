import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource} from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class CameraService {
  
  async tomarFoto(): Promise<string | null> {

    const image = await Camera.getPhoto({
      quality: 80,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    return image.dataUrl || null;

  }

  async seleccionarDeGaleria(): Promise<string | null> {

    const image = await Camera.getPhoto({
      quality: 80,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos
    });

    return image.dataUrl || null;

  }

}

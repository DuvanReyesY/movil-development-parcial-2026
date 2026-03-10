import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'; // 1. Importa RxJS
import { StorageService } from './storage.service';
import { Transaccion } from '../models/transaccion';

@Injectable({ providedIn: 'root' })
export class TransaccionService {
  // 2. Creamos el sujeto que mantendrá el estado actual de las transacciones
  private transaccionesSubject = new BehaviorSubject<Transaccion[]>([]);
  
  // 3. Exponemos el flujo como un Observable para que los componentes se suscriban
  transacciones$: Observable<Transaccion[]> = this.transaccionesSubject.asObservable();

  constructor(private storageService: StorageService) { 
    this.cargarInicialmente();
  }

  // 4. Cargamos los datos del storage al iniciar y actualizamos el sujeto
  private async cargarInicialmente() {
    const lista = await this.storageService.obtenerTransacciones() || [];
    this.transaccionesSubject.next(lista);
  }

  async obtenerTodas(): Promise<Transaccion[]> {
    return this.transaccionesSubject.value; // Retornamos el valor actual inmediatamente
  }

  async guardar(transaccion: Transaccion) {
    let lista = await this.obtenerTodas();
    const index = lista.findIndex(t => t.id === transaccion.id);
    
    if (index !== -1) {
      lista[index] = transaccion;
    } else {
      lista.push(transaccion);
    }
    
    await this.storageService.guardarTransacciones(lista);
    this.transaccionesSubject.next(lista); // 5. Notificamos a todo el sistema que los datos cambiaron
  }

  async eliminar(id: string) {
    let lista = await this.obtenerTodas();
    lista = lista.filter(t => t.id !== id);
    
    await this.storageService.guardarTransacciones(lista);
    this.transaccionesSubject.next(lista); // 5. Notificamos la eliminación
  }
}
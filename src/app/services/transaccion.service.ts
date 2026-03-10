// transaccion.service.ts
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Transaccion } from '../models/transaccion';

@Injectable({ providedIn: 'root' })
export class TransaccionService {
  constructor(private storageService: StorageService) {}

  async obtenerTodas(): Promise<Transaccion[]> {
    return await this.storageService.obtenerTransacciones();
  }

  async guardar(transaccion: Transaccion) {
    const lista = await this.obtenerTodas();
    
    const index = lista.findIndex(t => t.id === transaccion.id);
    if (index !== -1) {
      lista[index] = transaccion;
    } else {
      lista.push(transaccion);
    }
    await this.storageService.guardarTransacciones(lista);
  }

  async eliminar(id: string) {
    let lista = await this.obtenerTodas();
    lista = lista.filter(t => t.id !== id);
    await this.storageService.guardarTransacciones(lista);
  }
}
// transaccion.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class TransaccionService {
  
  private transaccionesSubject = new BehaviorSubject<any[]>([]);
  public transacciones$ = this.transaccionesSubject.asObservable();

  constructor(private storageService: StorageService) {
    this.cargarTransacciones();
  }

  private async cargarTransacciones() {
    try {
      const transacciones = await this.storageService.obtenerTransacciones() || [];
      console.log('Transacciones cargadas:', transacciones);
      this.transaccionesSubject.next(transacciones);
    } catch (error) {
      console.error('Error cargando transacciones:', error);
      this.transaccionesSubject.next([]);
    }
  }

  async obtenerTodas() {
    return this.transaccionesSubject.value;
  }

  async guardar(transaccion: any) {
    try {
      console.log('Guardando transacción en servicio:', transaccion);
      
      let transacciones = await this.obtenerTodas();
      
      // Buscar si ya existe
      const index = transacciones.findIndex(t => t.id === transaccion.id);
      
      if (index >= 0) {
        // Actualizar existente
        console.log('Actualizando transacción existente en índice:', index);
        transacciones[index] = { ...transaccion };
      } else {
        // Agregar nueva
        console.log('Agregando nueva transacción');
        transacciones.push({ ...transaccion });
      }
      
      // Guardar en storage
      await this.storageService.guardarTransacciones(transacciones);
      
      // Actualizar el BehaviorSubject (crear nuevo array para forzar cambio)
      this.transaccionesSubject.next([...transacciones]);
      
      console.log('Transacciones después de guardar:', transacciones);
      return transaccion;
    } catch (error) {
      console.error('Error guardando transacción:', error);
      throw error;
    }
  }

  async eliminar(id: string) {
    try {
      console.log('Eliminando transacción con id:', id);
      
      let transacciones = await this.obtenerTodas();
      transacciones = transacciones.filter(t => t.id !== id);
      
      await this.storageService.guardarTransacciones(transacciones);
      this.transaccionesSubject.next([...transacciones]);
      
      console.log('Transacciones después de eliminar:', transacciones);
    } catch (error) {
      console.error('Error eliminando transacción:', error);
      throw error;
    }
  }
}
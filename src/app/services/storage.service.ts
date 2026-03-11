import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({ providedIn: 'root' })
export class StorageService {
  private _storage: Storage | null = null;
  private _initPromise: Promise<void>;

  constructor(private storage: Storage) {
    this._initPromise = this.init();
  }

  async init() {
    this._storage = await this.storage.create();
    console.log('Storage inicializado');
  }

  async guardarTransacciones(transacciones: any[]) {
    try {
      console.log('Guardando en storage:', transacciones);
      await this._storage?.set('transacciones', transacciones);
      
      // Verificar que se guardó
      const verificacion = await this._storage?.get('transacciones');
      console.log('Verificación storage:', verificacion);
    } catch (error) {
      console.error('Error guardando en storage:', error);
    }
  }

  async obtenerTransacciones(): Promise<any[]> {
    try {
      const data = await this._storage?.get('transacciones');
      console.log('Obteniendo de storage:', data);
      return data || [];
    } catch (error) {
      console.error('Error obteniendo de storage:', error);
      return [];
    }
  }

  async obtenerUsuario(userData: { email: any; token: string; }) {
    // Si el storage aún no inicia, esperamos un poco
    if (!this._storage) {
      await this.init();
    }
    return await this._storage?.get('sesion_usuario');
  }
  async limpiarUsuario() {
    await this.initStorageIfNeeded();
    await this._storage?.remove('USER_SESSION');
    // Opcional: await this._storage?.clear(); // Borra absolutamente todo
  }
  private async initStorageIfNeeded() {
    if (!this._storage) {
      this._storage = await this.storage.create();
    }
  }

  async guardar(key: string, valor: any) {
    await this._storage?.set(key, valor);
  }

  async obtener(key: string) {
    return await this._storage?.get(key);
  }

  async limpiar(key: string) {
    await this._initPromise;
    await this._storage?.remove(key);
  }
}
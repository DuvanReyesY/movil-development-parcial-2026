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
  }

  async guardarTransacciones(transacciones: any[]) {
    await this._storage?.set('transacciones', transacciones);
  }

  async obtenerTransacciones(): Promise<any[]> {
    await this._initPromise;
    const data = await this._storage?.get('transacciones');
    return data || [];
  }
  async guardarUsuario(userData: any) {
    await this.initStorageIfNeeded();
    await this._storage?.set('USER_SESSION', userData);
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
}
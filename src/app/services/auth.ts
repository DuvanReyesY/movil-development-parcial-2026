import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  
  private _storage: Storage | null = null;


  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this._storage = await this.storage.create();
  }

  async login(credentials: any): Promise<boolean> {
  // Aquí va tu lógica de validación (API o manual)
  const userExists = true; // Simulación

  if (userExists) {
    const userData = { email: credentials.email, token: 'xyz123' };
    
    // GUARDAR EN STORAGE (vital para el F5)
    await this.storage.guardarUsuario(userData);
    
    // NOTIFICAR AL SUBJECT (vital para que el Guard te deje pasar)
    this.authSubject.next(true);
    
    return true;
  }
  return false;
}

  async logout(){
    await this._storage?.remove('session');

  }

  async isAuth(){
    const session = await this._storage?.get('session');
    return session != null;
    
  }

  async getUser(){
    return await this._storage?.get('session');
  }
  
  
}



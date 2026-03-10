import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Empezamos en 'null' para indicar que estamos cargando desde el Storage
  private authSubject = new BehaviorSubject<boolean | null>(null);
  public isAuthenticated$ = this.authSubject.asObservable();

  constructor(private storage: StorageService) {
    this.inicializarSesion();
  }

  async inicializarSesion() {
    const sesion = await this.storage.obtenerUsuario // O tu clave de sesión
    this.authSubject.next(!!sesion); // Emite true si existe, false si no
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
async logout() {
  await this.storage.limpiarUsuario(); // Debes crear este método en StorageService
  this.authSubject.next(false); // Notifica al Guard que ya no hay sesión
}
}
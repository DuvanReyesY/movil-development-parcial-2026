import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Inicializamos en null para indicar que el estado es desconocido al arrancar
  private authSubject = new BehaviorSubject<boolean | null>(null);
  public isAuthenticated$ = this.authSubject.asObservable();

  constructor(private storage: StorageService) {
    this.inicializarSesion();
  }

  // En AuthService.ts
  async inicializarSesion() {
    try {
      // Aseguramos que el storage esté listo antes de consultar
      await this.storage.init();
      const sesion = await this.storage.obtener('USER_SESSION');
      this.authSubject.next(!!sesion);
    } catch (e) {
      this.authSubject.next(false);
    }

  }

  /* // Verifica si ya existe una sesión guardada al iniciar la app
  async inicializarSesion() {
    const sesion = await this.storage.obtener('USER_SESSION');
    this.authSubject.next(!!sesion);
  }
 */
  // Registro: Guarda al usuario en una lista en el Storage
  async register(userData: User): Promise<boolean> {
    try {
      const usuarios: User[] = (await this.storage.obtener('lista_usuarios')) || [];


      // Validación: Evitar duplicados
      if (usuarios.find(u => u.email === userData.email)) {
        console.warn('El usuario ya existe');
        return false;
      }

      usuarios.push(userData);
      await this.storage.guardar('lista_usuarios', usuarios);
      return true;
    } catch (error) {
      console.error('Error al registrar:', error);
      return false;
    }
  }

  // Login: Valida credenciales contra la lista guardada
  async login(credentials: { email: string, password: string }): Promise<boolean> {
    const usuarios: User[] = (await this.storage.obtener('lista_usuarios')) || [];

    const usuarioEncontrado = usuarios.find(u =>
      u.email === credentials.email && u.password === credentials.password
    );

    if (usuarioEncontrado) {
      // Guardamos la sesión activa
      await this.storage.guardar('USER_SESSION', usuarioEncontrado);
      this.authSubject.next(true);
      return true;
    }

    return false;
  }

  // Logout: Limpia la sesión y notifica a la app
  async logout() {
    await this.storage.limpiar('USER_SESSION');
    this.authSubject.next(false);
  }
}
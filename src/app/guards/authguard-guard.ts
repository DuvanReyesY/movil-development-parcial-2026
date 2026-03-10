import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Verifica el nombre del archivo
import { filter, map, take } from 'rxjs/operators';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Convertimos el observable en una promesa para controlarlo mejor
  const isAuthenticated = await authService.isAuthenticated$.pipe(
    filter(val => val !== null),
    take(1)
  ).toPromise();

  if (isAuthenticated) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
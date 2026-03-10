import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Verifica el nombre del archivo
import { filter, map, take } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated$.pipe(
    // Este filtro es vital: si es null, el Guard "se queda esperando"
    filter(val => val !== null), 
    take(1),
    map(isAuth => {
      if (isAuth) return true;
      
      router.navigate(['/login']);
      return false;
    })
  );
};
// login.page.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {
  
  loginForm: FormGroup;
  loginError: string = '';
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() { }

  async doLogin() {
    // Limpiar errores anteriores
    this.loginError = '';
    
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    
    try {
      const user = this.loginForm.value;
      const success = await this.auth.login(user);

      if (success) {
        // Login exitoso
        this.router.navigateByUrl('/tabs/dashboard', { replaceUrl: true });
      } else {
        // Credenciales incorrectas
        this.loginError = 'Correo o contraseña incorrectos';
      }
    } catch (error) {
      console.error('Error en login:', error);
      this.loginError = 'Error al conectar con el servidor';
    } finally {
      this.isLoading = false;
    }
  }

  irSignUp() {
    this.router.navigate(['/registro']);
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

}
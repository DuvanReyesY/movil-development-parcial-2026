import { Component, NgModule, OnInit } from '@angular/core';
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
    if (this.loginForm.valid) {
      const user = this.loginForm.value;

      // 1. Intentamos el login
      const success = await this.auth.login(user);

      if (success) {
        // 2. IMPORTANTE: Navegar a la ruta de las tabs, no al dashboard suelto
        this.router.navigateByUrl('/tabs/dashboard', { replaceUrl: true });
      }
    } else {
      // Marca los campos como tocados para que el usuario vea los errores de validación
      this.loginForm.markAllAsTouched();
      console.log('Formulario no válido');
    }
  }
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

}

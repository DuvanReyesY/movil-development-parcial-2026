import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  standalone: false
})
export class RegistroPage implements OnInit {
  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {}

  async onRegister() {
    if (this.registroForm.valid) {
      const exito = await this.auth.register(this.registroForm.value);
      if (exito) {
        console.log('Usuario registrado con éxito');
        this.router.navigate(['/login']);
      } else {
        console.error('El usuario ya existe o hubo un error');
      }
    } else {
      this.registroForm.markAllAsTouched();
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class profilePage implements OnInit {
  usuario: any = { email: '', telefono: '' };

  constructor(
    private authService: AuthService,
    private storage: StorageService,
    private router: Router
  ) {}

  async ngOnInit() {
    // Obtenemos los datos del usuario logueado
    this.usuario = await this.storage.obtener('USER_SESSION');
  }

  async onLogout() {
    await this.authService.logout();
    this.router.navigate(['./login'], { replaceUrl: true });
  }
}
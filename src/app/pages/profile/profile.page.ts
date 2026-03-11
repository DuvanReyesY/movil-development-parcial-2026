import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
        private router: Router,
        private alertController: AlertController
    ) { }

    async ngOnInit() {
        // Obtenemos los datos del usuario logueado
        this.usuario = await this.storage.obtener('USER_SESSION');
    }

    /*  async onLogout() {
       await this.authService.logout();
       this.router.navigate(['./login'], { replaceUrl: true });
     } */

    async confirmarLogout() {
        const alert = await this.alertController.create({
            header: 'Cerrar Sesión',
            message: '¿Estás seguro de que quieres cerrar sesión?',
            cssClass: 'logout-alert',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        console.log('Cierre de sesión cancelado');
                    }
                },
                {
                    text: 'Cerrar Sesión',
                    handler: () => {
                        this.onLogout();
                    }
                }
            ]
        });

        await alert.present();
    }

    async onLogout() {
        try {
            await this.authService.logout();
            // Mostrar mensaje de éxito (opcional)
            const toast = document.createElement('ion-toast');
            toast.message = 'Sesión cerrada correctamente';
            toast.duration = 2000;
            toast.color = 'success';
            document.body.appendChild(toast);
            await toast.present();

            this.router.navigate(['/login'], { replaceUrl: true });
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    }
}

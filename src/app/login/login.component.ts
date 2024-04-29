import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private auth: AuthService,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async login() {    
    
    const result = await this.auth.login(this.username, this.password).catch(()=>{
      this.presentToast('Usuario o contraseña no válida');
    });
    if (result) {
      this.router.navigate(['/']);
    }
  }

  async presentToast(message: string) { 
    const toast = await this.toastController.create({
      message: message,
      duration: 3000, 
      position: 'bottom'
    });
    toast.present();
  }

  navigateBack() {
    this.router.navigate(['/']);
  }

}

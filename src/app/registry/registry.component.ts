import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss'],
})
export class RegistryComponent  implements OnInit {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private auth: AuthService,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async createAccount() {
    var message = 'Usuario creado con éxito';
    const result = await this.auth.createUser(this.email, this.password).catch((err)=>{
      message = err.message;
    });
    this.presentToast(message);
    if (result){
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

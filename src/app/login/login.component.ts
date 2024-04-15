import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    // Por ahora, simplemente redirigiremos a la página de inicio
    this.router.navigate(['/']);
  }

  navigateBack() {
    this.router.navigate(['/']); 
  }

}

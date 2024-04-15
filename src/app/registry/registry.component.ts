import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit() {}

  createAccount() {
    // Por ahora, simplemente redirigiremos a la página de inicio
    this.router.navigate(['/']);
  }

  navigateBack() {
    this.router.navigate(['/']); 
  }

}

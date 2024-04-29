import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importamos Router
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class homePage implements OnInit {
  public home!: string;
  private activatedRoute: ActivatedRoute;
  isLogin: boolean = false;

  constructor(private router: Router, activatedRoute: ActivatedRoute, private auth: AuthService) {
    this.activatedRoute = activatedRoute;
    this.auth.stateUser().subscribe(res =>{
      if (res) {          
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }

  ngOnInit() {
    this.home = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  navigateToRegistry() {
    this.router.navigate(['/registry']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importamos Router

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class homePage implements OnInit {
  public home!: string;
  private activatedRoute: ActivatedRoute;

  constructor(private router: Router, activatedRoute: ActivatedRoute) {
    this.activatedRoute = activatedRoute;
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

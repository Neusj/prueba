import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  isLogin: boolean = false;

  public appPages = [
    { title: 'Inbox', url: '/home/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/home/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/home/favorites', icon: 'heart' },
    { title: 'Archived', url: '/home/archived', icon: 'archive' },
    { title: 'Trash', url: '/home/trash', icon: 'trash' },
    { title: 'Spam', url: '/home/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
    
    constructor(private auth: AuthService, private router: Router,) {
      this.auth.stateUser().subscribe(res =>{
        if (res) {          
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      });
    }

  logout(){    
    const result = this.auth.logout();    
    this.router.navigate(['/']);
  }
  goMap(){    
    this.router.navigate(['/map']);
  }
  goProductos(){    
    this.router.navigate(['/productos']);
  }
}

import { Component } from '@angular/core';
import { User } from '../model/login';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  err=0;
  constructor(private authService: AuthService, private router: Router) { }
  user = new User();
  onLoggedin() {
    this.authService.login(this.user).subscribe({
      next: (data) => {
      let jwToken = data.headers.get('Authorization')!;
      this.authService.saveToken(jwToken);
      this.router.navigate(['/tickets']);
      },
      error: (err: any) => {
      this.err = 1;
      }
      });
      
  }

}

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import { ILogin } from '../LoginInteface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router : Router){}

  onLogin() {
    const credentials = {
      username: this.username,
      password: this.password
    };

    this.authService.login(credentials).subscribe({
      next: (res : ILogin) => {
        console.log('Login successful:', res);
        if (res.accessToken) {
          this.router.navigate(['/dashboard']);
        }
      },
      error: (err) => {
        console.error('Login failed:', err);
      }
    });

  }
}

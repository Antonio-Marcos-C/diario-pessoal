import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email = '';
  password = '';
  constructor(private auth: AuthService, private router: Router) {}
  submit() {
    this.auth.login({ email: this.email, password: this.password })
      .subscribe(() => this.router.navigateByUrl('/home'));
  }
}

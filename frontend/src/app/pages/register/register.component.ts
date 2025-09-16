import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  nomeCompleto = '';
  email = '';
  password = '';
  constructor(private auth: AuthService, private router: Router) {}
  submit() {
    this.auth.register({ nomeCompleto: this.nomeCompleto, email: this.email, password: this.password })
      .subscribe(() => this.router.navigateByUrl('/home'));
  }
}

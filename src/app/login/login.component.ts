import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  styleUrls: ['./login.component.css'], // Referencing the external CSS file
  imports: [FormsModule, NgIf],
  template: `
    <div class="login-container">
      <h2>Login</h2>
      <form (ngSubmit)="login()">
        <div>
          <label for="username">Username</label>
          <input type="text" id="username" [(ngModel)]="username" name="username" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" [(ngModel)]="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <div *ngIf="errorMessage" class="error">{{ errorMessage }}</div>
    </div>
  `
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'touchworld' && this.password === 'touchworldTech') {
      this.router.navigate(['/employee-list']);
    } else {
      this.errorMessage = 'Invalid username or password!';
    }
  }
}

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private router: Router, private http: HttpClient) {}
  async handleSubmit() {
    try {
      const response = await this.http.post<any>(
        'http://localhost:3000/login',
        {
          username: this.username,
          password: this.password,
        }
      );

      localStorage.setItem('username', this.username);
      alert('Success');
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.log(`username : ${this.username}`);
      alert('Error');
    }
  }
}

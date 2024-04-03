import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  username: string = localStorage.getItem('username') || '';
  constructor(private router: Router) {}
  onLogout() {
    localStorage.removeItem('username');
    this.router.navigate(['/']);
  }
}

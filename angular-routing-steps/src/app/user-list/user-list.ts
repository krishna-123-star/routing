import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
imports: [CommonModule, FormsModule, HttpClientModule],  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
users: any[] = [];
  errorMessage = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    this.http.get<any[]>(url).subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
        this.errorMessage = 'Failed to load users. Please try again later.';
      }
    });
  }
}

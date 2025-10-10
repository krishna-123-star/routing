import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, UserService } from '../user';

@Component({
  selector: 'app-user-list',
  standalone: true,
imports: [CommonModule, FormsModule, HttpClientModule],  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList implements OnInit {
users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log('✅ Response received:', data);
        this.users = data;
      },
      error: (err) => console.error('❌ Error:', err)
    });
  }
}

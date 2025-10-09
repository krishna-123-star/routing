import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'
})
export class UserForm {
 user = {
    name: '',
    email: ''
  };

  message = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    // Example endpoint (use your actual backend API)
    const url = 'https://jsonplaceholder.typicode.com/posts';

    this.http.post(url, this.user).subscribe({
      next: (response) => {
        console.log('Response:', response);
        this.message = 'User successfully submitted!';
        this.user = { name: '', email: '' }; // reset form
      },
      error: (err) => {
        console.error('Error:', err);
        this.message = 'Something went wrong!';
      }
    });
  }
}

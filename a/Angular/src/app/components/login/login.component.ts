import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  loginUser() {
    const { email, password } = this.loginForm.value;
    let temp = localStorage.getItem('users');
    let userData: [IUser] = temp ? JSON.parse(temp) : [];

    for (let i in userData) {
      if (userData[i].email === email && userData[i].password === password) {
        localStorage.setItem('isLoggedIn', 'true');
        alert('login successful');
        this.router.navigate(['/home']);
        return;
      }
    }

    alert('invalid username and password');
  }
}

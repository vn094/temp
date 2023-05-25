import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface IUser {
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.registerForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      username: new FormControl(''),
    });
  }

  registerUser() {
    const { email } = this.registerForm.value;

    let userData = localStorage.getItem('users');
    let data: [IUser] = userData ? JSON.parse(userData) : [];

    for (let i in data) {
      if (data[i].email === email) {
        alert('email already registered.....');
        return;
      }
    }

    data.push(this.registerForm.value);
    localStorage.setItem('users', JSON.stringify(data));

    alert('Account created successfully');
  }
}

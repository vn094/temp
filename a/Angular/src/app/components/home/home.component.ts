import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    const isLoggedIn = localStorage.getItem('isLoggedIn') || 'false';
    if (isLoggedIn === 'false') {
      this.router.navigate(['/']);
    }

    this.loadData();
  }

  loadData() {
    
  }
}

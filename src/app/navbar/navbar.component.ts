import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Subscribe to router events
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Get the current route after navigation
        const currentRoute = this.router.url;
        // Remove 'active' class from all nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
          (link as HTMLElement).classList.remove('active');
        });
        // Add 'active' class to the link corresponding to the current route
        const activeLink = document.querySelector(`.nav-link[href="${currentRoute}"]`);
        if (activeLink) {
          (activeLink as HTMLElement).classList.add('active');
        }
      }
    });
  }
}

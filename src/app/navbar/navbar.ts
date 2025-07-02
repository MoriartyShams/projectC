import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Filtering } from '../filtering';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  categories: string[] = [];
  isMenuOpen: boolean = false;

  constructor(private filtering: Filtering, private router: Router) {
    this.categories = this.filtering.addCategoriesToNavbar();
  }

  toggleMenu(event: Event) {
    this.isMenuOpen = !this.isMenuOpen;
  }

  addCategory(category: string) {
    this.filtering.setCategory(category);
    this.isMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.isMenuOpen = false;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let prevScrollpos = window.pageYOffset;
  console.log(prevScrollpos);
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos);
    let navbar = document.querySelector('.navbar-container') as HTMLElement;
    let isMobileView =
      window.getComputedStyle(
        document.querySelector('.navbar-container') as HTMLElement
      ).flexDirection === 'column';
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = '0';
    } else {
      navbar.style.top = isMobileView ? '-12rem' : '-17rem';
    }
    prevScrollpos = currentScrollPos;
  };
});

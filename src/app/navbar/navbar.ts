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

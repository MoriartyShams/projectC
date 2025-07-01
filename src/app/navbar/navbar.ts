import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Filtering } from '../filtering';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  categories: string[] = [];

  constructor(private filtering: Filtering) {
    this.categories = this.filtering.addCategoriesToNavbar();
  }
  addCategory(category: string) {
    this.filtering.setCategory(category);
  }
}

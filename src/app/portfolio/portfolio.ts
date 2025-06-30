import { Component } from '@angular/core';
import { Photos } from '../photos';
import { IPhoto } from '../iphoto';
import { Filtering } from '../filtering';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  photos: IPhoto[] = Photos;
  category: string = "";


  constructor(private filtering: Filtering) { }
  
  ngDoCheck(): void {
    this.category = this.filtering.getCategory();
    this.photos = this.filtering.filterByCategory(this.category)
  }
}

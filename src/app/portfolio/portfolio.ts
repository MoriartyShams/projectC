import { Component } from '@angular/core';
import { Photos } from '../photos';
import { IPhoto } from '../iphoto';
import { Filtering } from '../filtering';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  photos: IPhoto[] = Photos;
  category: string = '';
  obj: IPhoto = {} as IPhoto;
  element: any;
  myModal: any;

  openModal(item: IPhoto) {
    this.obj = item;
    this.myModal.show();
  }

  ngAfterViewInit() {
    this.element = document.getElementById('MyModal') as HTMLElement;
    this.myModal = new Modal(this.element);
  }

  constructor(private filtering: Filtering) {}

  ngDoCheck(): void {
    this.category = this.filtering.getCategory();
    this.photos = this.filtering.filterByCategory(this.category);
  }
}

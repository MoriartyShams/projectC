import { Component, AfterViewInit } from '@angular/core';
import { Photos } from '../photos';
import { IPhoto } from '../iphoto';
import { Filtering } from '../filtering';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio implements AfterViewInit {
  photos: IPhoto[] = Photos;
  category: string = '';
  obj: IPhoto = {} as IPhoto;
  myModal: Modal | undefined;

  openModal(item: IPhoto) {
    this.obj = item;
    this.myModal?.show();
  }

  ngAfterViewInit() {
    const modalElement = document.getElementById('MyModal');
    if (modalElement) {
      this.myModal = new Modal(modalElement);
    }
  }

  constructor(private filtering: Filtering) {}

  ngDoCheck(): void {
    this.category = this.filtering.getCategory();
    this.photos = this.filtering.filterByCategory(this.category);
  }
}
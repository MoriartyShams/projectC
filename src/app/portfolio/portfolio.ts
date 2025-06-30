import { Component } from '@angular/core';
import { Photos } from '../photos';
import { IPhoto } from '../iphoto';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  photos: IPhoto[] = Photos;
}

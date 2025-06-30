import { Injectable } from '@angular/core';
import { IPhoto } from './iphoto';
import { Photos } from './photos';

@Injectable({
  providedIn: 'root'
})
export class Filtering {
  private filter: IPhoto[] = [];
  category: string = "";
  categories: string[] = [];




  addCategoriesToNavbar() {
    let tempArray: string[] = [];
    for (let val of Photos) {
      if (!tempArray.find(tempVal => tempVal == val.category)) {
        tempArray.push(val.category)
      }
    }
    this.categories = tempArray;
    return this.categories;
  }

  setCategory(category: string) {
    this.category = category;
  }
  getCategory() {
    return this.category;
  }

  filterByCategory(category: string): IPhoto[]{
    if (category == "") {
      return Photos;
    } else {
      return Photos.filter((val)=> val.category == category)
    }
  }
  constructor() { }
}

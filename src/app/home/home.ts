import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  awards = [
    {
      id: 1,
      name: "International Photography Award",
      image: "award1.jpeg",
    description:"The International Photography Awards are a group of awards for professional, non-professional and student photographers on a global scale which are awarded annually at the Lucie Awards gala."
    },
    {
      id: 2,
      name: "Lucie Awards",
      image: "award2.webp",
    description:"The Lucie Awards is an annual event honoring achievements in photography, founded in 2003 by Hossein Farmani. The Lucie Awards is an annual gala ceremony presented by the Lucie Foundation, honoring photographers and their achievements."
    },
    {
      id: 3,
      name: "Wildlife Photographer of the Year",
      image: "award3.jpg",
    description:"Wildlife Photographer of the Year is an annual international wildlife photography competition staged by the Natural History Museum in London, England. "
  },
  ]

  customers = [
 {id: 1, image:"customer1.png" }, 
 {id: 2, image:"customer2.png",},
 {id: 3, image:"customer3.jpg", },
 { id: 4, image:"customer4.webp",},
 {id: 5, image:"customer5.jpg",},
 { id: 6, image:"customer6.webp",},
 {id: 7,image:"customer7.jpeg", },
 { id: 8,image:"customer8.jpg", },
 {id: 9, image:"customer9.png",},
  ]
   customerSlides: any[][] = [];

  constructor() {
    this.customerSlides = this.getCustomerSlides();
  }

  // Group customers into slides of 4
  getCustomerSlides() {
    const slides = [];
    for (let i = 0; i < this.customers.length; i += 4) {
      slides.push(this.customers.slice(i, i + 4));
    }
    return slides;
  }
}

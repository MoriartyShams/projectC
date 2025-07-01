import { Component } from '@angular/core';
import { Ireview } from '../Ireview';
import { Review } from '../review';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  review: Ireview[] = Review;

}

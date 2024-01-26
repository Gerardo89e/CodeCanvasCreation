import { Component } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgbCarousel,CommonModule,NgbCarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  /*images = [
    'assets/images/image1.jpg',
    'assets/images/image2.jpg',
    'assets/images/image3.jpg',
    // Add more image paths as needed
  ];*/
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}

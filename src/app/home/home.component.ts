import { Component } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CarouselComponent]
})
export class HomeComponent {
}

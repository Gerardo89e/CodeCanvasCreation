import { Component, OnInit, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
//import {CarouselComponent} from './carousel/carousel.component';
import {ServiceSectionComponent} from './service-section/service-section.component';
import {GetStartedComponent} from './get-started/get-started.component';
import { FooterComponent } from "../footer/footer.component";
import { GetInTouchComponent } from "../get-in-touch/get-in-touch.component";
import { MeetOurTeamComponent } from "../meet-our-team/meet-our-team.component";
import { CarouselComponent } from "./carousel/carousel.component";
//import {MeetOurTeamComponent} from './meet-our-team/meet-our-team.component';
import { StickyNavbar } from './navbar/navbar-sticky';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavbarComponent, ServiceSectionComponent, GetStartedComponent, FooterComponent, GetInTouchComponent, MeetOurTeamComponent, CarouselComponent]
})
export class AppComponent{
  title = 'CodeCanvasCreation';
  
}

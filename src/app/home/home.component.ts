import { Component } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";
import { ServiceSectionComponent } from "../service-section/service-section.component";
import { GetStartedComponent } from "../get-started/get-started.component";
import { MeetOurTeamComponent } from "../../meet-our-team/meet-our-team.component";
import { GetInTouchComponent } from "../../get-in-touch/get-in-touch.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";
import { DisplayPortfolioComponent } from "../../display-portfolio/display-portfolio.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CarouselComponent, ServiceSectionComponent, GetStartedComponent, MeetOurTeamComponent, GetInTouchComponent, NavbarComponent, FooterComponent, DisplayPortfolioComponent]
})
export class HomeComponent {
}

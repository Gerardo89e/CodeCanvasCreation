import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; // Import your routes array
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,NgModule,NgModule],
})
export class AppRoutingModule {}

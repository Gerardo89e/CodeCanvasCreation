import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPortfolioComponent } from './display-portfolio.component';

describe('DisplayPortfolioComponent', () => {
  let component: DisplayPortfolioComponent;
  let fixture: ComponentFixture<DisplayPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

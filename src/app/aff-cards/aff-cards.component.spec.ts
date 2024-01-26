import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffCardsComponent } from './aff-cards.component';

describe('AffCardsComponent', () => {
  let component: AffCardsComponent;
  let fixture: ComponentFixture<AffCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AffCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

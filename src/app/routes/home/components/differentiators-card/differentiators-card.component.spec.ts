import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentiatorsCardComponent } from './differentiators-card.component';

describe('DifferentiatorsCardComponent', () => {
  let component: DifferentiatorsCardComponent;
  let fixture: ComponentFixture<DifferentiatorsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DifferentiatorsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DifferentiatorsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

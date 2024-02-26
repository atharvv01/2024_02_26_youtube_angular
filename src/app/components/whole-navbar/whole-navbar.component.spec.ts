import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholeNavbarComponent } from './whole-navbar.component';

describe('WholeNavbarComponent', () => {
  let component: WholeNavbarComponent;
  let fixture: ComponentFixture<WholeNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WholeNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WholeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

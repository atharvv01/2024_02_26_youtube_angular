import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeNavigationComponent } from './subscribe-navigation.component';

describe('SubscribeNavigationComponent', () => {
  let component: SubscribeNavigationComponent;
  let fixture: ComponentFixture<SubscribeNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscribeNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscribeNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

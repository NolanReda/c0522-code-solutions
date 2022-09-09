import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotButtonComponent } from './hot-button.component';

describe('HotButtonComponent', () => {
  let component: HotButtonComponent;
  let fixture: ComponentFixture<HotButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

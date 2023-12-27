import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TOrderComponent } from './t-order.component';

describe('TOrderComponent', () => {
  let component: TOrderComponent;
  let fixture: ComponentFixture<TOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

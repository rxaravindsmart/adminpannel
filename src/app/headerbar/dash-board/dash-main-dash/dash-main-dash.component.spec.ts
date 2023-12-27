import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashMainDashComponent } from './dash-main-dash.component';

describe('DashMainDashComponent', () => {
  let component: DashMainDashComponent;
  let fixture: ComponentFixture<DashMainDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashMainDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashMainDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

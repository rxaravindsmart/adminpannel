import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JwellComponent } from './jwell.component';

describe('JwellComponent', () => {
  let component: JwellComponent;
  let fixture: ComponentFixture<JwellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JwellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JwellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

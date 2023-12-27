import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailInviteComponent } from './email-invite.component';

describe('EmailInviteComponent', () => {
  let component: EmailInviteComponent;
  let fixture: ComponentFixture<EmailInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailInviteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

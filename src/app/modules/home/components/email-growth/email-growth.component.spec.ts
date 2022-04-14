import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailGrowthComponent } from './email-growth.component';

describe('EmailGrowthComponent', () => {
  let component: EmailGrowthComponent;
  let fixture: ComponentFixture<EmailGrowthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailGrowthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

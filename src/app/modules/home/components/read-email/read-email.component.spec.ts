import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadEmailComponent } from './read-email.component';

describe('ReadEmailComponent', () => {
  let component: ReadEmailComponent;
  let fixture: ComponentFixture<ReadEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

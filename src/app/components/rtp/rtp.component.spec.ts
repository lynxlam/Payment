import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtpComponent } from './rtp.component';

describe('RtpComponent', () => {
  let component: RtpComponent;
  let fixture: ComponentFixture<RtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpoComponent } from './npo.component';

describe('NpoComponent', () => {
  let component: NpoComponent;
  let fixture: ComponentFixture<NpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

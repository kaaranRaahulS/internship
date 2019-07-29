import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonmenPage } from './salonmen.page';

describe('SalonmenPage', () => {
  let component: SalonmenPage;
  let fixture: ComponentFixture<SalonmenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalonmenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonmenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonwomenPage } from './salonwomen.page';

describe('SalonwomenPage', () => {
  let component: SalonwomenPage;
  let fixture: ComponentFixture<SalonwomenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalonwomenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonwomenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PestcontrolPage } from './pestcontrol.page';

describe('PestcontrolPage', () => {
  let component: PestcontrolPage;
  let fixture: ComponentFixture<PestcontrolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PestcontrolPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PestcontrolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

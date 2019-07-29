import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EleccarplumPage } from './eleccarplum.page';

describe('EleccarplumPage', () => {
  let component: EleccarplumPage;
  let fixture: ComponentFixture<EleccarplumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleccarplumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleccarplumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

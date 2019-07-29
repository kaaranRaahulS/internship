import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessandyogaPage } from './fitnessandyoga.page';

describe('FitnessandyogaPage', () => {
  let component: FitnessandyogaPage;
  let fixture: ComponentFixture<FitnessandyogaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessandyogaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessandyogaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

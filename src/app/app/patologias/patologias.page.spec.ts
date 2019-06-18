import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatologiasPage } from './patologias.page';

describe('PatologiasPage', () => {
  let component: PatologiasPage;
  let fixture: ComponentFixture<PatologiasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatologiasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatologiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionPage } from './seleccion.page';

describe('SeleccionPage', () => {
  let component: SeleccionPage;
  let fixture: ComponentFixture<SeleccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

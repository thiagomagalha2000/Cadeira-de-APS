import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletandoFabricanteComponent } from './deletando-fabricante.component';

describe('DeletandoFabricanteComponent', () => {
  let component: DeletandoFabricanteComponent;
  let fixture: ComponentFixture<DeletandoFabricanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletandoFabricanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletandoFabricanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

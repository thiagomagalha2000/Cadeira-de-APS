import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenhaAtualizarFabricanteComponent } from './senha-atualizar-fabricante.component';

describe('SenhaAtualizarFabricanteComponent', () => {
  let component: SenhaAtualizarFabricanteComponent;
  let fixture: ComponentFixture<SenhaAtualizarFabricanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenhaAtualizarFabricanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenhaAtualizarFabricanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

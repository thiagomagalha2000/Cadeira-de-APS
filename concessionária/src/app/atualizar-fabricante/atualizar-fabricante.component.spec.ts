import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarFabricanteComponent } from './atualizar-fabricante.component';

describe('AtualizarFabricanteComponent', () => {
  let component: AtualizarFabricanteComponent;
  let fixture: ComponentFixture<AtualizarFabricanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizarFabricanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarFabricanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

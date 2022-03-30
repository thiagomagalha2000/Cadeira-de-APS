import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizandoFabricanteComponent } from './atualizando-fabricante.component';

describe('AtualizandoFabricanteComponent', () => {
  let component: AtualizandoFabricanteComponent;
  let fixture: ComponentFixture<AtualizandoFabricanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizandoFabricanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizandoFabricanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

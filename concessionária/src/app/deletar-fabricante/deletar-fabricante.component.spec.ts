import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarFabricanteComponent } from './deletar-fabricante.component';

describe('DeletarFabricanteComponent', () => {
  let component: DeletarFabricanteComponent;
  let fixture: ComponentFixture<DeletarFabricanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletarFabricanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarFabricanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

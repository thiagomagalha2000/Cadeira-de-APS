import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenhaDeletarFabricanteComponent } from './senha-deletar-fabricante.component';

describe('SenhaDeletarFabricanteComponent', () => {
  let component: SenhaDeletarFabricanteComponent;
  let fixture: ComponentFixture<SenhaDeletarFabricanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenhaDeletarFabricanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenhaDeletarFabricanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

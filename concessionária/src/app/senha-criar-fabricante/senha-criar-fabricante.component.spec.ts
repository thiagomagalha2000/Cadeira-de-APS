import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenhaCriarFabricanteComponent } from './senha-criar-fabricante.component';

describe('SenhaCriarFabricanteComponent', () => {
  let component: SenhaCriarFabricanteComponent;
  let fixture: ComponentFixture<SenhaCriarFabricanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenhaCriarFabricanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenhaCriarFabricanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

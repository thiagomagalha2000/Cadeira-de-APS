import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarCarroComponent } from './deletar-carro.component';

describe('DeletarCarroComponent', () => {
  let component: DeletarCarroComponent;
  let fixture: ComponentFixture<DeletarCarroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletarCarroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

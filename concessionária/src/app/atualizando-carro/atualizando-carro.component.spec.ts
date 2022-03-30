import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizandoCarroComponent } from './atualizando-carro.component';

describe('AtualizandoCarroComponent', () => {
  let component: AtualizandoCarroComponent;
  let fixture: ComponentFixture<AtualizandoCarroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizandoCarroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizandoCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

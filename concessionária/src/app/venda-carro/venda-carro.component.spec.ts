import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaCarroComponent } from './venda-carro.component';

describe('VendaCarroComponent', () => {
  let component: VendaCarroComponent;
  let fixture: ComponentFixture<VendaCarroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendaCarroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

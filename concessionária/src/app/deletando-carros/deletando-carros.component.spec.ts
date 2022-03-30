import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletandoCarrosComponent } from './deletando-carros.component';

describe('DeletandoCarrosComponent', () => {
  let component: DeletandoCarrosComponent;
  let fixture: ComponentFixture<DeletandoCarrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletandoCarrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletandoCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

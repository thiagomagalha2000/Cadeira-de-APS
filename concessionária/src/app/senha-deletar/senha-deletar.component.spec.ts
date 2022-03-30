import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenhaDeletarComponent } from './senha-deletar.component';

describe('SenhaDeletarComponent', () => {
  let component: SenhaDeletarComponent;
  let fixture: ComponentFixture<SenhaDeletarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenhaDeletarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenhaDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

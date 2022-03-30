import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenhaCriarComponent } from './senha-criar.component';

describe('SenhaCriarComponent', () => {
  let component: SenhaCriarComponent;
  let fixture: ComponentFixture<SenhaCriarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenhaCriarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenhaCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

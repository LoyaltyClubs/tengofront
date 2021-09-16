import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaCargarComponent } from './empresa-cargar.component';

describe('EmpresaCargarComponent', () => {
  let component: EmpresaCargarComponent;
  let fixture: ComponentFixture<EmpresaCargarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaCargarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaCargarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

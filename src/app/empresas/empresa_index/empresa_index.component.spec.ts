import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaIndexComponent } from './empresa_index.component';

describe('IndexComponent', () => {
  let component: EmpresaIndexComponent;
  let fixture: ComponentFixture<EmpresaIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

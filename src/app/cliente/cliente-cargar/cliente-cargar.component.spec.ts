import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCargarComponent } from './cliente-cargar.component';

describe('ClienteCargarComponent', () => {
  let component: ClienteCargarComponent;
  let fixture: ComponentFixture<ClienteCargarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteCargarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteCargarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

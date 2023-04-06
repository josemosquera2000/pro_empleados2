import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEmpleadosComponent } from './create-empleados.component';

describe('CreateEmpleadosComponent', () => {
  let component: CrearEmpleadosComponent;
  let fixture: ComponentFixture<CrearEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEmpleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

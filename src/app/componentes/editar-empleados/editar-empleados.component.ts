import { style } from '@angular/animations';
import { CssSelector } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-editar-empleados',
  templateUrl: './editar-empleados.component.html',
  styleUrls: ['./editar-empleados.component.css'],
})
export class EditarEmpleadosComponent {
  editarEmpleados: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private empleadoService: EmpleadoService,
    private router: Router,
    private toastr: ToastrService,
    private arouter: ActivatedRoute
  ) {
    this.editarEmpleados = this.fb.group({
      documento: [''],
      nombre: [''],
      apellido: [''],
      salario: [''],
    });
    this.id = this.arouter.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit(): void {
   // this.editaEmpleados();
  }

  actualizarEmpleado() {
    this.submitted = true;
    if (this.editarEmpleados.invalid) {
      return;
    }

    const empleado: any = {};

    if (this.editarEmpleados.get('documento')?.dirty) {
      empleado.documento = this.editarEmpleados.value.documento;
    }
    if (this.editarEmpleados.get('nombre')?.dirty) {
      empleado.nombre = this.editarEmpleados.value.nombre;
    }
    if (this.editarEmpleados.get('apellido')?.dirty) {
      empleado.apellido = this.editarEmpleados.value.apellido;
    }
    if (this.editarEmpleados.get('salario')?.dirty) {
      empleado.salario = this.editarEmpleados.value.salario;
    }

    console.log(empleado);
    this.loading = true;
    if (this.id !== null) {
      this.empleadoService
        .actualizarEmpleado(this.id, empleado)
        .then(() => {
          this.toastr.success('Empleado actualizado con exito');
          console.log('empleado actualizado con exito');
          this.router.navigate(['lista-empleados']);
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
    }
  }
}

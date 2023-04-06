import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { error } from 'winston';


@Component({
  selector: 'app-create-empleados',
  templateUrl: './crear-empleados.component.html',
  styleUrls: ['./crear-empleados.component.css']
})
export class CrearEmpleadosComponent {
  createEmpleados: FormGroup;
  submitted = false;
  loading = false;
  constructor(private fb: FormBuilder,
    private empleadoService: EmpleadoService, private router: Router,
    private toastr: ToastrService) {
    this.createEmpleados = this.fb.group({
      documento: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      salario: ['', Validators.required]

    })
  }

  ngOnInit(): void
  {

  }
  agregarEmpleados()
  {
    this.submitted= true;
    if (this.createEmpleados.invalid) {
      return;
    }

    const empleado: any=
    {
      documento: this.createEmpleados.value.documento,
      nombre: this.createEmpleados.value.nombre,
      apellido: this.createEmpleados.value.apellido,
      salario: this.createEmpleados.value.salario,
      fechacreada: new Date(),
      fechaactual: new Date(),
    }
    console.log(empleado);
    this.loading = true;
    this.empleadoService.agregarEmpleado(empleado).then(()=>
      {
        this.toastr.success('Empleado registrado con exito');
        console.log("empleado registrado con exito");
        this.router.navigate(['\lista-empleados']);
        this.loading = false;
  }).catch(error =>{
    console.log(error);
    this.loading = false;
  })
  }

}

function capitalizeWords(arg0: any) {
  throw new Error('Function not implemented.');
}


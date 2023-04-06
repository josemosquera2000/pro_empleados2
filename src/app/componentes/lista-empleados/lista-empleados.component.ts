import { Component, inject, OnInit } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css'],
})
export class ListaEmpleadosComponent implements OnInit {
  // firestore: Firestore = inject(Firestore)
  empleados: any[] = [];
  //items: Observable<any[]>;
  constructor(private empleadosService: EmpleadoService,

    private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.getEmpleados();
  }
  //Creamos un procedmiento para pedir los datos
  getEmpleados() {
    /*llamamos a la variable de service .getempleados() ya que es el otro procedimiento
    algo ahi de que una subripcion la verdad no es muy claro
      */
    this.empleadosService.getempleados().subscribe((data) => {
      this.empleados =[];
      //Recorremos la informacion que se convierte un arreglo
      data.forEach((element: any) => {
        this.empleados.push({
          //Aqui creamos los id y los igualamos al id de la base de datos
          id: element.payload.doc.id,
          //Y esta la informacion como nombre,apellido, etc
          ...element.payload.doc.data(),
        });
      });
      console.log(this.empleados)
    });
  }
  eliminarEmpleados(id: string)
  {

    this.empleadosService.eliminarEmpleados(id).then(() =>{

      this.toastr.error("El empleado fue eliminado");
      console.log("El empleado fue eliminado")
    }).catch(error =>{
      console.log(error);
      //this.loading = false;
    })
  }
}

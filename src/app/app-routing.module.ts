import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpleadosComponent } from './componentes/crear-empleados/create-empleados.component';
import { ListaEmpleadosComponent } from './componentes/lista-empleados/lista-empleados.component';
import { EditarEmpleadosComponent } from './componentes/editar-empleados/editar-empleados.component';

const routes: Routes = [
  {path: '', redirectTo: 'lista-empleados', pathMatch:'full'},
  {path: 'lista-empleados', component: ListaEmpleadosComponent},
  {path: 'crear-empleados', component: CrearEmpleadosComponent},
  {path: 'editar-empleados/:id', component: EditarEmpleadosComponent},
  {path: '**', redirectTo: 'lista-empleados', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

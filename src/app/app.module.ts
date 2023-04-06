//Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { enableProdMode } from '@angular/core';
import { environment } from '../environments/environment';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Componentes
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './componentes/lista-empleados/lista-empleados.component';
import { CrearEmpleadosComponent } from './componentes/crear-empleados/create-empleados.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { CapitalizeDirective } from './capitalize.directive';
import { EditarEmpleadosComponent } from './componentes/editar-empleados/editar-empleados.component';



enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    CrearEmpleadosComponent,
    NavbarComponent,
    CapitalizeDirective,
    EditarEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    ToastrModule.forRoot(),
    ToastContainerModule,
     BrowserAnimationsModule

  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent]
})
export class AppModule { }

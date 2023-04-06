import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private firestore: AngularFirestore) { }
  agregarEmpleado(empleado:any): Promise<any>
  {
    return this.firestore.collection('empleados').add(empleado);
  }
  getempleados()
  {
    return this.firestore.collection('empleados', ref => ref.orderBy('fechacreada', 'asc')).snapshotChanges();
  }
//Aqui vamos a eliminar empleados y para eso se necesita el id
  eliminarEmpleados(id: string): Promise<any> {
    return this.firestore.collection('empleados').doc(id).delete();
  }

 getEmpleado(id: string): Observable<any> {
    return this.firestore.collection('empleados').doc(id).snapshotChanges();
  }

  actualizarEmpleado(id: string, data:any): Promise<any> {
    return this.firestore.collection('empleados').doc(id).update(data);
  }
}

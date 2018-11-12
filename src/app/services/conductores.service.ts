import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Conductores } from '../models/conductores';

@Injectable({
  providedIn: 'root'
})
export class ConductoresService {

selectedConductor: Conductores;
empleado : Conductores[];
readonly URL_API = 'http://localhost:8000/api/conductores';

  constructor(private http: HttpClient) {
    this.selectedConductor= new Conductores();
   }
   //listar los conductores
getConductores(){
  return this.http.get(this.URL_API);
};
//crear conductor
addConductor( Conductor : Conductores){
  return this.http.post(this.URL_API, Conductor);
};
//actualizar conductor
updateConductor (conductor: Conductores){
  return this.http.put(this.URL_API+ '/${conductor._id}', conductor);
};

// eliminar conductor
deleteConductor(_id:string){
return this.http.delete(this.URL_API +'/${_id}');
}

}

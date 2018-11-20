import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conductores } from '../models/conductores';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConductoresService {

  selectedConductor: Conductores;
  conductores: Conductores[];
  readonly URL_API = 'http://localhost:8000/api/conductores';

  constructor(private http: HttpClient) {
    this.selectedConductor = new Conductores();
  }
  //listar los conductores
  getConductores(): Observable<Conductores[]> {
    return this.http.get<Conductores[]>(this.URL_API);
  };
  //crear conductor
  addConductor(Conductor: Conductores) {
    console.log('service');
    console.log(Conductor);
    return this.http.post(this.URL_API, Conductor);
  };
  //actualizar conductor
  updateConductor(conductor: Conductores) {

    return this.http.put(this.URL_API + `/${conductor._id}`, conductor);
  };

  // eliminar conductor
  deleteConductor(_id: String, state: String) {
    return this.http.put(this.URL_API + `/delete/${_id}`, state);
  }

}

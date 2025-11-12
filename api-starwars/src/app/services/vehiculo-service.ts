import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle, VehiculeList } from '../interfaces/vehiculo-list.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {


  constructor(private http:HttpClient){}


  listarVehiculos():Observable<VehiculeList>{
    return this.http.get<VehiculeList>("https://swapi.dev/api/vehicles/")
  }

  getVehiculo(id : number): Observable<Vehicle>{
    if (!id) throw new Error('id requerido');
    return this.http.get<Vehicle>(`https://swapi.dev/api/vehicles/${id}`);
  }
  
  
  
}

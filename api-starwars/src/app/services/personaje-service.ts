import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje, PersonajeList } from '../interfaces/personaje-list.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonajeService {

  private baseUrl = 'https://swapi.dev/api/people';

  constructor(private http: HttpClient){}

  listarPersonajes(): Observable<PersonajeList>{
    return this.http.get<PersonajeList>(`${this.baseUrl}/`)
  }

  obtenerDetallePersona (id: string): Observable<Personaje>{
    return this.http.get<Personaje>(`${this.baseUrl}/${id}/`)
  }
  
}

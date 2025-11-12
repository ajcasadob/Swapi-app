import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/personaje-list.interface';
import { PersonajeService } from '../../services/personaje-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personaje-list-page',
  imports: [CommonModule],
  templateUrl: './personaje-list-page.html',
  styleUrl: './personaje-list-page.css',
})
export class PersonajeListPage implements OnInit{

constructor(private service: PersonajeService, private router: Router) {}

  listaPersonaje : Personaje[]=[];

  ngOnInit(): void {
    this.service.listarPersonajes().subscribe((resp) => {
      this.listaPersonaje = resp.results;
    });
  }

  verDetalles(person: Personaje) {
    const id = person.url.split('/').filter(Boolean).pop(); // Extrae la id correctamente
    this.router.navigate(['/people', id]);
  }

}

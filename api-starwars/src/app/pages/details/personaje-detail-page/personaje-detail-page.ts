import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajeService } from '../../../services/personaje-service';
import { Personaje } from '../../../interfaces/personaje-list.interface';

@Component({
  selector: 'app-personaje-detail-page',
  imports: [],
  templateUrl: './personaje-detail-page.html',
  styleUrl: './personaje-detail-page.css',
})
export class PersonajeDetailPage implements OnInit {

  person ?: Personaje;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonajeService
  ){}


   ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.personService.obtenerDetallePersona(id)
        .subscribe(data => this.person = data);
    }
  }

  

}

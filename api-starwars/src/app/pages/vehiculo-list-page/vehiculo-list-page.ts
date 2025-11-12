import { Component } from '@angular/core';
import { Vehicle } from '../../interfaces/vehiculo-list.interface';
import { VehiculoService } from '../../services/vehiculo-service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-vehiculo-list-page',
    standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './vehiculo-list-page.html',
  styleUrl: './vehiculo-list-page.css',
})
export class VehiculoListPage {

  listaVehiculos: Vehicle[]=[]

  constructor(
    private services: VehiculoService,
  ){}

  ngOnInit(): void{
    this.services.listarVehiculos().subscribe((resp)=>{
      this.listaVehiculos = resp.results;
    })
  }

  }


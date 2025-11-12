import { Component } from '@angular/core';
import { Vehicle } from '../../../interfaces/vehiculo-list.interface';
import { VehiculoService } from '../../../services/vehiculo-service';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-vehiculo-detail-page',
  imports: [RouterLink, ],
  templateUrl: './vehiculo-detail-page.html',
  styleUrl: './vehiculo-detail-page.css'
})
export class VehiculoDetailPage {


  vehicle?: Vehicle;

  constructor(
    private services: VehiculoService,
    private route: ActivatedRoute
  ){}

  ngOnInit():void {
    const id = this.route.snapshot.paramMap.get('id')
    if(id != null){
      this.services.getVehiculo(+id).subscribe((resp) => {
        this.vehicle = resp
      })
    }
  }



}

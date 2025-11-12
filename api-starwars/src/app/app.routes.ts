import { Routes } from '@angular/router';
import { VehiculoDetailPage } from './pages/details/vehiculo-detail-page/vehiculo-detail-page';
import { VehiculoListPage } from './pages/vehiculo-list-page/vehiculo-list-page';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'vehicles',
        pathMatch: 'full'
    },
    {
        path: 'vehicles',
        component: VehiculoListPage
    },
    {
        path: 'vehiculo-details/:id',
        component: VehiculoDetailPage
    }
];

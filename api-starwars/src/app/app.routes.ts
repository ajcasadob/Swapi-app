import { Routes } from '@angular/router';
import { PersonajeListPage } from './pages/personaje-list-page/personaje-list-page';
import { PersonajeDetailPage } from './pages/details/personaje-detail-page/personaje-detail-page';
import { VehiculoDetailPage } from './pages/details/vehiculo-detail-page/vehiculo-detail-page';
import { VehiculoListPage } from './pages/vehiculo-list-page/vehiculo-list-page';

export const routes: Routes = [

    {
        path: '',
        redirectTo: '/personajes',
        pathMatch: 'full'
    },
    {
        path: 'personajes',
        component: PersonajeListPage
    },
    {
        path: 'people/:id',
        component: PersonajeDetailPage
    }, 
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


import { Routes } from '@angular/router';
import { PersonajeListPage } from './pages/personaje-list-page/personaje-list-page';
import { PersonajeDetailPage } from './pages/details/personaje-detail-page/personaje-detail-page';

export const routes: Routes = [

{
    path: '',
    redirectTo: '/personajes',
    pathMatch: 'full'
},
{
    path:'personajes',
    component: PersonajeListPage
},
{
    path:'people/:id',
    component:PersonajeDetailPage
}



];

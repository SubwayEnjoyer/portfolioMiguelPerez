import { Routes } from '@angular/router';
import { PaginaInicioComponent } from './pages/pagina-inicio/pagina-inicio.component';


export const routes: Routes = [
  {
    path: '',
    component: PaginaInicioComponent
  },{
    path: '**',
    component: PaginaInicioComponent
  }
];

import { Component } from '@angular/core';
import { SobreMiComponent } from '../../components/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from '../../components/experiencia/experiencia.component';
import { ProyectosComponent } from '../../components/proyectos/proyectos.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';


@Component({
  selector: 'app-pagina-inicio',
  imports: [SobreMiComponent, ExperienciaComponent,ProyectosComponent,AboutMeComponent],
  templateUrl: './pagina-inicio.component.html',
  styleUrl: './pagina-inicio.component.css'
})
export class PaginaInicioComponent {

}

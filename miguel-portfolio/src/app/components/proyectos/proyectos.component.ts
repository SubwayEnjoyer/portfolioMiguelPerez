import { Component } from '@angular/core';
import { ProyectoCardComponent } from '../proyecto-card/proyecto-card.component';
import { Card2Component } from '../card-2/card-2.component';


@Component({
  selector: 'proyectos',
  imports: [ProyectoCardComponent,Card2Component],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {




}

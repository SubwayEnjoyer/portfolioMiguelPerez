import { Component } from '@angular/core';
import { ProyectoCardComponent } from '../proyecto-card/proyecto-card.component';

interface proyectos {
  foto: string,
  titulo: string,
  descripcion:string}
@Component({
  selector: 'proyectos',
  imports: [ProyectoCardComponent],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

  pro: proyectos[] = [
    {foto:"Peluqueria",titulo:"Peluqueria",descripcion:"Peluqueria"},
    {foto:"Peluqueria",titulo:"Peluqueria",descripcion:"Peluqueria"},
    {foto:"Peluqueria",titulo:"Peluqueria",descripcion:"Peluqueria"}
  ]


}

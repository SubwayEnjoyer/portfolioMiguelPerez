// contactame.component.ts
import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'contactame',
  templateUrl: './contactame.component.html',
  styleUrls: ['./contactame.component.css']
})
export class ContactameComponent {
  constructor(private http: HttpClient) {}

  nombre = signal<string>('');
  correo = signal<string>('');
  descripcion = signal<string>('');


  enviarCorreo(nombre: string, correo: string, descripcion: string) {
    const datosCorreo = { nombre, correo, descripcion };
    console.log(nombre, correo, descripcion)

    this.http.post('http://localhost:3000/api/enviar-correo', datosCorreo)
      .subscribe({
        next: (response: any) => {
          console.log('Correo enviado:', response);
          alert('Correo enviado con éxito');
        },
        error: (error) => {
          console.error('Error al enviar:', error);
          alert('Error al enviar el correo');
        }
      });
  }
}

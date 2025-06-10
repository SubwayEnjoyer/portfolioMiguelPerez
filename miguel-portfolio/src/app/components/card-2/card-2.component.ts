import { Component, ElementRef, signal, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'card-2',
  imports: [],
  templateUrl: './card-2.component.html',
  styleUrl: './card-2.component.css'
})
export class Card2Component {
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;

  detener() {
    if (this.video && this.video.nativeElement) {
      this.video.nativeElement.pause();
    } else {
      console.error('No se encontró la referencia del video.');
    }
  }
}

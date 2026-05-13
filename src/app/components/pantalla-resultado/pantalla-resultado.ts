import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pantalla-resultado',
  templateUrl: './pantalla-resultado.html',
  styleUrls: ['./pantalla-resultado.scss'],
  standalone: false
})
export class PantallaResultadoComponent {

  @Input() resultado:string = '';

}
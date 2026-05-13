import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.html',
  styleUrls: ['./botones.scss'],
  standalone: false
})
export class BotonesComponent {

  @Input() texto:string = '';

}
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensajeService } from '../../services/mensaje.service';
@Component({
  selector: 'app-segundo',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './segundo.component.html',
  styleUrl: './segundo.component.scss'
})
export class SegundoComponent {
  constructor(public mensajeService : MensajeService){}

  mensaje : string =  '';

  enviar(){
    this.mensajeService.addMensaje(this.mensaje, 'segundo');
    this.mensaje = '' ;
  }
}

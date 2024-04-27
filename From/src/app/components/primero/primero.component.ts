import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensajeService } from '../../services/mensaje.service';

@Component({
  selector: 'app-primero',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './primero.component.html',
  styleUrl: './primero.component.scss'
})
export class PrimeroComponent {
  constructor(public mensajeService : MensajeService){}

  mensaje : string =  '';

  enviar(){
    this.mensajeService.addMensaje(this.mensaje, 'primero');
     
    this.mensaje = '' ;
  }

}

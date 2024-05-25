import { Component } from '@angular/core';
import { MensajeService } from '../../services/mensaje.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dos.component.html',
  styleUrl: './dos.component.css'
})
export class DosComponent {

  mensaje: string = '';
  constructor(public msnService : MensajeService){}
  enviar(){
    this.msnService.addMensaje(this.mensaje, 'segundo');
    console.log(this.mensaje);
    this.mensaje= '';

  }
}

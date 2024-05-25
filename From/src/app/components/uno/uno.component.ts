import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MensajeService } from '../../services/mensaje.service';

@Component({
  selector: 'app-uno',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './uno.component.html',
  styleUrl: './uno.component.css'
})
export class UnoComponent {
  
  mensaje : string = '';
  constructor(public msnService : MensajeService){

  }
  enviar(){
    this.msnService.addMensaje(this.mensaje, 'primero');
    console.log(this.mensaje);
    this.mensaje = '';

  }

}
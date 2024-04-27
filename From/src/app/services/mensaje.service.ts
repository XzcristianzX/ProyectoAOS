import { Injectable } from '@angular/core';
import { MensajeInterface } from '../interfaces/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  mensaje : MensajeInterface[] = [] ;

  constructor() { }


  addMensaje(msn : string, author: string){
    this.mensaje.push({mensaje: msn, author: author});
  }

}

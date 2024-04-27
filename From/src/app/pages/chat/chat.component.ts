import { Component } from '@angular/core';
import { PrimeroComponent } from '../../components/primero/primero.component';
import { SegundoComponent } from '../../components/segundo/segundo.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [PrimeroComponent, SegundoComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

}

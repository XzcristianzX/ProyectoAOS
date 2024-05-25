import { Component } from '@angular/core';
import { UnoComponent } from '../../components/uno/uno.component';
import { DosComponent } from '../../components/dos/dos.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [UnoComponent, DosComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

}

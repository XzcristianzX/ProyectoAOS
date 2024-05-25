import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  title = 'clasedehoy';
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}


  onSubmit() {
    console.log('Formulario enviado');
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);

    this.router.navigate(['/producto']);
  }
}

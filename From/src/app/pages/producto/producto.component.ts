import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../../services/http/producto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {

  private readonly productS = inject(ProductoService);

  producto = [];

  produc$ = this.productS.getAll();

  ngOnInit(){
    this.productS.getAll().subscribe(res=>{
      this.producto = res;
    });
  }

}

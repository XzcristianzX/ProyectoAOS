import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../../services/http/consulta.service';
import { ProductosInterface } from '../../interfaces/productos-interface';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";



@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgxPaginationModule
  ],
  styleUrls: ['./producto.component.css']
})
export default class ProductoComponent implements OnInit {

  page: number = 1;

  productos: ProductosInterface[] = [];
  newProducto = { id: 2, title: "asd", description: "asd", price: 112, categoryId: 1, images: ["https://placeimg.com/640/480/any"] };
  // newProducto: ProductosInterface = { id: 2, title: "asd", description: "asd", price: 112, categoryId: 1, images: ["https://placeimg.com/640/480/any"] };

  constructor(private productoS: ConsultaService) { }

  ngOnInit() {
    this.getAllProductos();
  }

  getAllProductos() {
    this.productoS.getAll().subscribe((res: ProductosInterface[]) => {
      console.log(res)
      this.productos = res;
    });
  }

  addProducto() {
    this.productoS.create(this.newProducto).subscribe((res: ProductosInterface) => {
      this.productos.push(res);
      this.resetNewProducto();
    });
  }

  updateProducto(producto: ProductosInterface) {
    this.productoS.update(producto.id, producto).subscribe((res: ProductosInterface) => {
      const index = this.productos.findIndex(p => p.id === res.id);
      this.productos[index] = res;
    });
  }

  deleteProducto(id: number) {
    this.productoS.delete(id).subscribe(() => {
      this.productos = this.productos.filter(p => p.id !== id);
      this.getAllProductos();
    });
  }

  resetNewProducto() {
    this.newProducto = { id: 0, title: '', description: '', categoryId: 1, price: 0, images: [] };
  }
}

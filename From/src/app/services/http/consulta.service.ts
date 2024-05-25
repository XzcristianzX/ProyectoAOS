import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductosInterface } from '../../interfaces/productos-interface'; // Asegúrate de tener esta interfaz

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private readonly _http = inject(HttpClient);
  private apiUrl = "https://api.escuelajs.co/api/v1/products"; // URL de tu API

  constructor() { }

  getAll(): Observable<ProductosInterface[]> {
    return this._http.get<ProductosInterface[]>(this.apiUrl);
  }

  create(producto: ProductosInterface): Observable<ProductosInterface> {
    return this._http.post<ProductosInterface>(this.apiUrl+"/", producto);
  }

  update(id: number, producto: ProductosInterface): Observable<ProductosInterface> {
    return this._http.put<ProductosInterface>(`${this.apiUrl}/${id}`, producto);
  }

  delete(id: number): Observable<void> {
    return this._http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

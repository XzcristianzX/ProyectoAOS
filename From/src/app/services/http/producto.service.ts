import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private readonly _http = inject(HttpClient)

  constructor() { }


  getAll():Observable<any>{
    return this._http.get("https://api.escuelajs.co/api/v1/products");

  }
}

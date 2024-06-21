import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private _http: HttpClient,
  ) {
  }

  public getAllProducts(): Observable<any> {
    return this._http.get<any>('http://localhost:3300/producto/All');
  }

  public getProductById(productId: any): Observable<any> {
    return this._http.get<any>('http://localhost:3300/producto/' + productId)
  }

  public updateProduct(productId: any, data: any): Observable<any> {
    return this._http.put<any>('http://localhost:3300/producto/' + productId, data)
  }

  public saveProduct(data: any): Observable<any> {
    return this._http.post<any>('http://localhost:3300/producto' , data)
  }

  public deleteProduct(productId: string): Observable<any> {
    return this._http.delete<any>(`http://localhost:3300/producto/${productId}`);
  }


  public converterToBase64(file: File): Observable<any> {
    return new Observable<string | ArrayBuffer | null>(observer => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        observer.next(fileReader.result);
        observer.complete();
      };
      fileReader.onerror = error => {
        observer.error(error);
        observer.complete();
      }
    });
  }

}

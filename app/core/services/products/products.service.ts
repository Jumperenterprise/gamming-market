import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { Product } from './../../models/product.model';

import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Observable<Product[]>;

  constructor(
    private http: HttpClient,
    public db: AngularFirestore
  ) { this.products = this.db.collection('products').valueChanges(); }

  getAllProducts() {
    return this.products ;
    // return this.http.get<Product[]>(`${environment.url_api}/products`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(`${environment.url_api}/products`, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
}

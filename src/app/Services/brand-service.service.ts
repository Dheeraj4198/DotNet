import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandServiceService {
  url = "http://localhost:7259/api/v1/Brand"

  constructor(private http: HttpClient) { }

  AddBrands(data: any) {
    return this.http.post(this.url, data)
  }

  GetBrands() {
    return this.http.get(this.url)
  }

  GetOneBrand(Id: any) {
    return this.http.get(this.url + `/${Id}`)
  }
}
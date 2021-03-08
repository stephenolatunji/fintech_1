import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SuperServiceService {
  allCustomers;
  constructor(private http: HttpClient) { }

  getAllCustomers() {
    this.allCustomers = this.http.post<any>(`${environment.url}/api/Customers/getall`, {});
    return this.allCustomers
  }

getAllUser(data) {
    return this.http.post<any>(`${environment.url}/api/Customers/getall`, data);
  }

  addNewUser(data) {
    return this.http.post<any>(`${environment.url}/api/Customers/getall`, data);
  }

  getAllFaq() {
    return this.http.post<any>(`${environment.url}/api/FAQs/getallfaqs`, {});
  }

  addNewFaq(data) {
    return this.http.post<any>(`${environment.url}/api/FAQs//api/FAQs/createfaq`, data);
  }

  getAllUserRole() {
    return this.http.get<any>(`${environment.url2}/api/Roles/getall`, {});
  }
}

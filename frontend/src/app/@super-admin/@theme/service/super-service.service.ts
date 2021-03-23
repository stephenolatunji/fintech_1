import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SuperServiceService {
  allCustomers; allStaffs; allRoles; allTransaction; allPaaymentChannel;
  constructor(private http: HttpClient) { }

  logIn(user) {
    return this.http.post<any>(`${environment.url2}/api/authentication/login`, user)
  }

  getAllCustomers() {
    this.allCustomers = this.http.post<any>(`${environment.url}/api/Customers/getall`, {});
    return this.allCustomers
  }

  // getAllStaffs == getAllUsers
  getAllStaffs() {
    this.allStaffs = this.http.get<any>(`${environment.url2}/api/Staffs/getall`);
    return this.allStaffs
  }

  addNewUser(data) {
    return this.http.post<any>(`${environment.url2}/api/Staffs/create`, data);
  }

  editUser(data) {
    data.userId = localStorage.getItem('userId');
    console.log(data);
    return this.http.post<any>(`${environment.url2}/api/Staffs/update/${data.staffId}`, data);
  }

  getAllFaq() {
    return this.http.post<any>(`${environment.url}/api/FAQs/getallfaqs`, {});
  }

  addNewFaq(data) {
    return this.http.post<any>(`${environment.url}/api/FAQs/api/FAQs/createfaq`, data);
  }

  getAllUserRole() {
    return this.http.get<any>(`${environment.url2}/api/Roles/getall`);
  }

  getAllMarketRateConfig() {
    return this.http.post<any>(`${environment.url}/api/Configurations/getallmarketrateconfig`, {});
  }

  updateMarketRate(data) {console.log(data);
  
    data.staffId = localStorage.getItem('userId');
    return this.http.post<any>(`${environment.url}/api/Configurations/updatemarketrateconfig/${data.id}`, data);
  }

  getAllTransactions() {
    this.allTransaction = this.http.get<any>(`${environment.url}/api/Orders/getorderlistings`);
    return this.allTransaction
  }

  getAllPaymentChannel() {
    this.allPaaymentChannel = this.http.get<any>(`${environment.url}​/api​/PaymentChannels​/getAll`);
    return this.allPaaymentChannel;
  }

  newPaymentChannel(data) {
    return this.http.post<any>(`${environment.url}​/api​/PaymentChannels​/create`, data);
  }

  editPaymentChannel(data) {
    return this.http.put<any>(`${environment.url}​/api​/PaymentChannels​/update/${data.id}`, data);
  }

  editUserRole(data) {
    data.userId = localStorage.getItem("userId");
    console.log(data)
    return this.http.post<any>(`https://dev-app-ip.eastus.cloudapp.azure.com:44310/api/Roles/update/${data.roleId}`, data);
  }

  newUserRole(data) {
    console.log(data)
    return this.http.post<any>(`https://dev-app-ip.eastus.cloudapp.azure.com:44310/api/Roles/create`, data);
  }

  createtransactionlimit(data) {
    return this.http.post<any>(`https://dev-app-ip.eastus.cloudapp.azure.com:44310/api/Roles/create`, data); 
  }
}
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
<<<<<<< HEAD
    return this.http.post<any>(`${environment.url2}/api/Customers/getall`, data);
=======
    return this.http.post<any>(`${environment.url2}/api/Staffs/create`, data);
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
  }

  editUser(data) {
    data.userId = localStorage.getItem('userId');
<<<<<<< HEAD
    return this.http.put<any>(`${environment.url2}/api/Staffs/update/${data.staffId}`, data);
=======
    console.log(data);
    return this.http.post<any>(`${environment.url2}/api/Staffs/update/${data.staffId}`, data);
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
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

  newMarketRate(data) {
    return this.http.post<any>(`${environment.url}/api/Configurations/createmarketrateconfig`, data);
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

<<<<<<< HEAD
  createtransactionlimit(data) {
    return this.http.post<any>(`${environment.url}​/api​/Configurations​/createtransactionlimit`, data);
=======
  editUserRole(data) {
    data.userId = localStorage.getItem("userId");
    console.log(data)
    return this.http.post<any>(`https://dev-app-ip.eastus.cloudapp.azure.com:44310/api/Roles/update/${data.roleId}`, data);
  }

  newUserRole(data) {
    console.log(data)
    return this.http.post<any>(`https://dev-app-ip.eastus.cloudapp.azure.com:44310/api/Roles/create`, data);
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
  }
}
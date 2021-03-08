import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ServerService {
  // pending order is used for holding the data when match is found to be used in payment stuff
  public userDetails; matchFound; pendingOrders; userInformations; unfullfilledOrder;
 
  constructor(private http: HttpClient) { }

  newUser(user) {
    return this.http.post<any>(`${environment.url}/api/customers/create`, user)
  };

  logIn(user) {
    return this.http.post<any>(`${environment.url}/api/authentication/login`, user)
  }
  // Publish
  createOrder(order) {
    return this.http.post<any>(`${environment.url}/api/orders/create`, order)
  }

  findMatch(order) {
    return this.http.post<any>(`${environment.url}/api/orders/findmatch`, order)
  }

  getPendingOrders() {
    return this.http.get<any>(`${environment.url}/api/orders/getcustomerpendingorders/${localStorage.getItem('customerId')}`)
  }

  getTop10Listing() {
    return this.http.get<any>(`${environment.url}/api/orders/gettop10orderlistings`)
  }

  createAndMatchOrder(matchDetails) {
    return this.http.post<any>(`${environment.url}/api/orders/createandmatchorder`, matchDetails)
  }

  editUnfulfilledOrder(data) {
    return this.http.put<any>(`${environment.url}/api/orders/update/${localStorage.getItem('customerId')}`, data)
  } 


  getUserDeytailsWithCustomerId(customerId) {
    return this.http.post<any>(`${environment.url}/api/Customers/getbyid/${customerId}`, {})
  }

  updateUserProfile(data) {
    console.log(data)
    return this.http.put<any>(`${environment.url}/api/Customers/update/${data.customerId}`, data)
  }

  changePassword(data) {
    return this.http.post<any>(`${environment.url}/api/Authentication/changePassword`, data)
  }

  updateUserDocument(data) {
    return this.http.post<any>(`${environment.url}/api/Authentication/`, data)
  }

  confirmPassword(data) {
    return this.http.post<any>(`${environment.url}/api/Authentication/`, data)
  }

  updateProfilePicture(data) {
    const newData = {
      customerId: data.customerId,
      uploadImage: data.uploadImage.split(",")[1]
    }
    return this.http.post<any>(`${environment.url}/api/Customers/uploadimage`, newData)
  }

  createCardPayment(data) {
    const sanitizedData = {
      customerId: data.customerId,
      orderNo: data.orderNo,
      amount: data.myAmount,
      currencyCode: data.myCurrency,
      transactionFee: data.transactionFee
    }
    console.log(sanitizedData)
    return this.http.post<any>(`${environment.url}/api/Stripe/createcardpayment`, sanitizedData)
  }

  getTransactions() {
    // return this.http.get<any>(`${environment.url}/api/orders/gettop10orderlistings`)
  }
}

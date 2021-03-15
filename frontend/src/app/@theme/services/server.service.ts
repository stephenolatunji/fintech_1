import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  getPendingOrders_; getTop10Listing_;

  // pending order is used for holding the data when match is found to be used in payment stuff
  public userDetails; matchFound; pendingOrders; userInformations; unfullfilledOrder; allBanks;
  comingFromStripe: boolean = false;

  constructor(private http: HttpClient) { }

  newUser(user) {
    return this.http.post<any>(`${environment.url}/api/customers/create`, user)
  };

  logIn(user) {
    return this.http.post<any>(`${environment.url}/api/authentication/login`, user)
  }
  // Publish
  createOrder(order) {
    return this.http.post<any>(`${environment.url}/api/orders/create`, order, {headers:  {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
  }

  findMatch(order) {
    return this.http.post<any>(`${environment.url}/api/orders/findmatch`, order, {headers:  {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
  }

  getPendingOrders() {
     return this.http.get<any>(`${environment.url}/api/orders/getcustomerpendingorders/${localStorage.getItem('customerId')}`, {headers:  {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
  }

  getTop10Listing() {
    return this.http.get<any>(`${environment.url}/api/orders/gettop10orderlistings`, {headers:  {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
  }

  createAndMatchOrder(matchDetails) {
    if(matchDetails.myCurrency.toUpperCase() == 'NGN') {
      matchDetails.myCurrency = 1
    }
    else if(matchDetails.myCurrency.toUpperCase() == 'USD') {
      matchDetails.myCurrency = 2
    }
    else if(matchDetails.myCurrency.toUpperCase() == 'GBP') {
      matchDetails.myCurrency = 3
    }
    else if(matchDetails.myCurrency.toUpperCase() == 'EUR') {
      matchDetails.myCurrency = 4 
    }
    else if(matchDetails.myCurrency.toUpperCase() == 'CAD') {
      matchDetails.myCurrency = 5
    }

    if(matchDetails.convertedCurrency.toUpperCase() == 'NGN') {
      matchDetails.convertedCurrency = 1
    }
    else if(matchDetails.convertedCurrency.toUpperCase() == 'USD') {
      matchDetails.convertedCurrency = 2
    }
    else if(matchDetails.convertedCurrency.toUpperCase() == 'GBP') {
      matchDetails.convertedCurrency = 3
    }
    else if(matchDetails.convertedCurrency.toUpperCase() == 'EUR') {
      matchDetails.convertedCurrency = 4 
    }
    else if(matchDetails.convertedCurrency.toUpperCase() == 'CAD') {
      matchDetails.convertedCurrency = 5
    }
    console.log(matchDetails)
    return this.http.post<any>(`${environment.url}/api/orders/createandmatchorder`, matchDetails, {headers:  {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
  }

  editUnfulfilledOrder(data) {
    return this.http.put<any>(`${environment.url}/api/orders/update/${localStorage.getItem('customerId')}`, data, {headers:  {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
  } 

  getUserDeytailsWithCustomerId(customerId) {
    return this.http.post<any>(`${environment.url}/api/Customers/getbyid/${customerId}`, {}, {headers:  {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
  }

  updateUserProfile(data) {
    return this.http.put<any>(`${environment.url}/api/Customers/update/${data.customerId}`, data, {headers:  {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
  }

  changePassword(data) {
    return this.http.post<any>(`${environment.url}/api/Authentication/changePassword`, data)
  }

  updateUserDocument(data) {
    return this.http.post<any>(`${environment.url}/api/Authentication/`, data, {headers:  {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
  }

  confirmPassword(data) {
    return this.http.post<any>(`${environment.url}/api/Authentication/`, data)
  }

  updateProfilePicture(data) {
    const newData = {
      customerId: data.customerId,
      uploadImage: data.uploadImage.split(",")[1]
    }
    return this.http.post<any>(`${environment.url}/api/Customers/uploadimage`, newData, {headers:  {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
  }

  createCardPayment(data) {
    const sanitizedData = {
      customerId: data.customerId,
      orderNo: data.orderNo,
      // amount: data.myAmount,
      currencyCode: data.myCurrency.toUpperCase()=='NGN'? 1 : data.myCurrency.toUpperCase()=='USD'? 2 :  data.myCurrency.toUpperCase()=='GBP'? 3:  data.myCurrency.toUpperCase()=='EUR' ? 4 : 5,
      // transactionFee: data.transactionFee
    }
    console.log(sanitizedData)
    return this.http.post<any>(`${environment.url}/api/Stripe/createcardpayment`, sanitizedData, {headers:  {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
  }

  handlePayStack() {
    const params =  {
      email: 'stephenolatunji02@gmail.com',
      amount:2000*100,
      callback_url: `${environment.app_url}/dashboard`
    }
    // callback: (response)=> {
    //   window.location.href = "http://localhost:4200"
    // }
    const headers = {
      Authorization: `Bearer ${environment.payStackToken}`,
      'Content-Type': 'application/json'
    }

    return this.http.post(`https://api.paystack.co:443/transaction/initialize`, params, {headers: headers})
  }

  getTransactions() {
    // return this.http.get<any>(`${environment.url}/api/orders/gettop10orderlistings`)
  }

  payStackReference(ref) {
    return this.http.post(`${environment.url}/api/Paystack/verifypayment/${ref}`, {}, {headers:  {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
  }

  handleGetPaymentIntent(data) {console.log(data)
    const sanitizedData = {
      customerId: data.customerId,
      amount: data.myAmount,
      orderNo: data.orderNo,
      sessionId: data.sessionId
    }
    return this.http.post(`${environment.url}/api/Stripe/getpaymentintentstatus`, sanitizedData, {headers:  {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
  }

}

import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private http:HttpClient) {}

  message = "S.O.S"
  fromNumber=localStorage.getItem("contactnumber")
  toNumber= localStorage.getItem("usernumber")
  sendsms() {
    const payload = new HttpParams()
      .set('from',this.fromNumber! )
      .set('to',this.toNumber!)
      .set('text', this.message);

    return this.http.post('http://sms.com:3000/send-sms', payload);
  }

}

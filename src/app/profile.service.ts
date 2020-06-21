import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username: string;
  private clientid = 'a01ab69c664d5de39cdf';
  private clientsecret = 'fddb7b514cd5f7bd760449e5794ec7a64d650d12';

  constructor(private http: Http) {
    console.log("Service is now ready!")
    this.username = 'Okuro3499';
  }
}

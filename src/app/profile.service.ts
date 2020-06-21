import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username: string;
  private clientid = 'a01ab69c664d5de39cdf';
  private clientsecret = 'fddb7b514cd5f7bd760449e5794ec7a64d650d12';

  constructor(private http: HttpClient) {
    // tslint:disable-next-line: quotemark && semicolon
    console.log("Service is now ready!")
    this.username = 'Okuro3499';
  }
  getProfileInfo() {
    // tslint:disable-next-line: quotemark
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" +
      // tslint:disable-next-line: quotemark
      this.clientid + "&client_secret=" + this.clientsecret)
      .map(res => res);
  }
  getProfileRepos() {
    // tslint:disable-next-line: quotemark
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" +
      // tslint:disable-next-line: quotemark
      this.clientid + "&client_secret=" + this.clientsecret)
      .map(res => res);
  }

  updateProfile(username: string) {
    this.username = username;
  }
}

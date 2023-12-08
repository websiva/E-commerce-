import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:3000/register';
  constructor(private http: HttpClient) { }

  getAll() {

    return this.http.get(this.apiUrl);
  }

  getByCode(code: any) {
    return this.http.get(this.apiUrl + '/' + code);
  }

  proceedToRegister(inputdata: any) {
    return this.http.post(this.apiUrl, inputdata);
  }


  updateUser(user: any, inputdata: any) {
    return this.http.put(this.apiUrl + '/' + user, inputdata);
  }
}

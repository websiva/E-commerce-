import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signUp } from '../data-types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  userRegister(data:any){
   return this.http.post('http://localhost:3000/register',data);
  }
  Addregister(input:any)
  {
    debugger
return this.http.post("https://localhost:7253/test/register",input)
  }

  getPasswordUsingEmail(email: string){
    const body = { email_id: email };
    return this.http.post("https://localhost:7253/test/login", body);
  }
}

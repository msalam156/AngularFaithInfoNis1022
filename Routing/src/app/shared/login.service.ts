import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // declare variables
  isLogged : boolean = false;
  constructor(private httpClient : HttpClient) { }

  // validate username and password for Authorization and Authentication
  // Authorized return token with role and password
  public loginVerify(loginUser:Login){
    //calling RestApi by passing emailId and password
    console.log("Attempt authentication and authorize");
    return this.httpClient.post(environment.apiUrl+'api/login',loginUser);
  }
}
